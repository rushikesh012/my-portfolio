from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio/images/')
    github_link = models.URLField(blank=True)
    live_demo_link = models.URLField(blank=True)

    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=50)
    level = models.IntegerField(default=80)  # percentage or level

    def __str__(self):
        return self.name

class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    duration = models.CharField(max_length=50)  # e.g., 'Jan 2022 - Jun 2023'
    description = models.TextField()

    def __str__(self):
        return f"{self.title} at {self.company}"

class Achievement(models.Model):
    title = models.CharField(max_length=100)
    issuer = models.CharField(max_length=100, blank=True)
    date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True)
    certificate_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.email})"