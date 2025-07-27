from django.contrib import admin
from .models import Project, Skill, Experience, Achievement, ContactMessage

admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(Experience)
admin.site.register(Achievement)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')  # list view columns
    readonly_fields = ('name', 'email', 'message', 'created_at')  # make fields read-only
    search_fields = ('name', 'email', 'message')
    list_filter = ('created_at',)

    def has_add_permission(self, request):
        return False  # disable adding new messages

    def has_change_permission(self, request, obj=None):
        return False  # disable editing existing messages

    # do NOT override has_delete_permission → keep default (True)