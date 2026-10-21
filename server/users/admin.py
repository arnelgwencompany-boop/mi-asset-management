
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, UserPermissionOverride

@admin.register(User)
class CustomUserAdmin(UserAdmin):

    # Columns displayed in the users table
    list_display = (
        "username",
        "email",
        "first_name",
        "last_name",
        "role",
        "department",
        "is_active",
        "is_staff",
        "is_superuser",
    )

    # Filters
    list_filter = (
        "role",
        "department",
        "is_active",
        "is_staff",
        "is_superuser",
        "groups",
    )

    # Search users
    search_fields = (
        "username",
        "email",
        "first_name",
        "last_name",
        "employee_number",
        "department",
    )

    ordering = ("username",)

    # Additional fields when editing a user
    fieldsets = UserAdmin.fieldsets + (
        ("MI Asset - User Information", {
            "fields": (
                "user_id",
                "display_name",
                "upload_image",
                "role",
                "language",
            ),
        }),

        ("Company Information", {
            "fields": (
                "company_name",
                "employee_number",
                "title",
                "manager_name",
                "department",
                "location",
                "vip_user",
                "remote_user",
            ),
        }),

        ("Contact Information", {
            "fields": (
                "phone_number",
                "mobile_number",
                "websites",
                "address",
                "city",
                "state",
                "country",
                "zip_code",
            ),
        }),

        ("Additional Information", {
            "fields": (
                "notes",
                "created_at",
                "updated_at",
            ),
        }),
    )

    readonly_fields = (
        "created_at",
        "updated_at",
        "last_login",
        "date_joined",
    )

    # Restrict user administration to superusers.
    # Other staff can use separate, controlled APIs.
    def has_module_permission(self, request):
        return request.user.is_active and request.user.is_superuser

    def has_view_permission(self, request, obj=None):
        return request.user.is_active and request.user.is_superuser

    def has_add_permission(self, request):
        return request.user.is_active and request.user.is_superuser

    def has_change_permission(self, request, obj=None):
        return request.user.is_active and request.user.is_superuser

    def has_delete_permission(self, request, obj=None):
        return request.user.is_active and request.user.is_superuser


@admin.register(UserPermissionOverride)
class UserPermissionOverrideAdmin(admin.ModelAdmin):

    list_display = (
        "user",
        "permission",
        "decision",
    )

    list_filter = (
        "decision",
        "permission__content_type__app_label",
    )

    search_fields = (
        "user__username",
        "permission__codename",
    )

    autocomplete_fields = ("user",)

    def has_module_permission(self, request):
        return request.user.is_active and request.user.is_superuser
    def has_view_permission(self, request, obj=None):
        return request.user.is_active and request.user.is_superuser
    def has_add_permission(self, request):
        return request.user.is_active and request.user.is_superuser
    def has_change_permission(self, request, obj=None):
        return request.user.is_active and request.user.is_superuser
    def has_delete_permission(self, request, obj=None):
        return request.user.is_active and request.user.is_superuser
