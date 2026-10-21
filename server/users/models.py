
from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser, Permission


class User(AbstractUser):

    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Administrator"
        IT_ADMIN = "IT_ADMIN", "IT Administrator"
        TECHNICIAN = "TECHNICIAN", "IT Technician"
        EMPLOYEE = "EMPLOYEE", "Employee"

    # USER INFORMATION
    user_id = models.CharField(
        max_length=30,
        unique=True,
        null=True,
        blank=True
    )
    email = models.EmailField(blank=True)
    upload_image = models.ImageField(
        upload_to="profile_images/",
        blank=True,
        null=True
    )
    display_name = models.CharField(
        max_length=100,
        blank=True
    )
    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.EMPLOYEE
    )
    # COMPANY INFORMATION
    company_name = models.CharField(
        max_length=100,
        blank=True
    )
    employee_number = models.CharField(
        max_length=10,
        blank=True
    )
    title = models.CharField(
        max_length=100,
        blank=True
    )
    manager_name = models.CharField(
        max_length=100,
        blank=True
    )
    department = models.CharField(
        max_length=100,
        blank=True
    )
    location = models.CharField(
        max_length=100,
        blank=True
    )
    # PERSONAL SETTINGS
    language = models.CharField(
        max_length=10,
        default="en",
        blank=True
    )
    vip_user = models.BooleanField(default=False)
    remote_user = models.BooleanField(default=False)
    # CONTACT INFORMATION
    phone_number = models.CharField(
        max_length=20,
        blank=True
    )
    mobile_number = models.CharField(
        max_length=20,
        blank=True
    )
    websites = models.URLField(
        max_length=200,
        blank=True
    )
    address = models.CharField(
        max_length=200,
        blank=True
    )
    city = models.CharField(
        max_length=100,
        blank=True
    )
    state = models.CharField(
        max_length=100,
        blank=True
    )
    country = models.CharField(
        max_length=100,
        blank=True
    )
    zip_code = models.CharField(
        max_length=20,
        blank=True
    )
    notes = models.TextField(blank=True)
    # TIMESTAMPS
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        auto_now=True
    )

    # PERMISSION CHECK
    def has_system_permission(self, permission_code):
        """
        Priority:
        1. Inactive users are denied.
        2. Active superusers have full access.
        3. Individual ALLOW / DENY override.
        4. Django group or direct user permissions.
        5. Otherwise denied.
        """

        if not self.is_active:
            return False

        if self.is_superuser:
            return True

        if "." not in permission_code:
            return False

        app_label, codename = permission_code.split(".", 1)

        override = self.permission_overrides.filter(
            permission__content_type__app_label=app_label,
            permission__codename=codename
        ).values_list("decision", flat=True).first()

        if override == "ALLOW":
            return True

        if override == "DENY":
            return False

        return self.has_perm(permission_code)

    def __str__(self):
        return f"{self.username} - {self.get_role_display()}"


class UserPermissionOverride(models.Model):

    class Decision(models.TextChoices):
        ALLOW = "ALLOW", "Allow"
        DENY = "DENY", "Deny"

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="permission_overrides"
    )

    permission = models.ForeignKey(
        Permission,
        on_delete=models.CASCADE,
        related_name="user_overrides"
    )

    decision = models.CharField(
        max_length=5,
        choices=Decision.choices
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["user", "permission"],
                name="unique_user_permission_override"
            )
        ]

    def __str__(self):
        return (
            f"{self.user.username} - "
            f"{self.permission.codename} - "
            f"{self.decision}"
        )
