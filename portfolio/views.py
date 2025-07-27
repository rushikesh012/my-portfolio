from django.shortcuts import render, redirect
from .models import Project, Skill, Experience, Achievement, ContactMessage
import random

def home(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()
    experiences = Experience.objects.all()
    achievements = Achievement.objects.all()

    colors = ['success', 'info', 'warning', 'danger']

    # assign random color to each skill
    for skill in skills:
        skill.random_color = random.choice(colors)

    success = request.GET.get('success') == '1'  # detect redirect with success

    if request.method == 'POST':
        # form was submitted
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        if name and email and message:  # simple validation
            ContactMessage.objects.create(
                name=name,
                email=email,
                message=message
            )
            return redirect('/?success=1')  # redirect to avoid duplicate POST

    return render(request, 'portfolio/home.html', {
        'projects': projects,
        'skills': skills,
        'experiences': experiences,
        'achievements': achievements,
        'success': success,   # pass to template

        })

