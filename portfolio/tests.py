from django.test import TestCase
from django.urls import reverse

# Create your tests here.

class SimpleViewTests(TestCase):
    def test_home_view_status_code(self):
        url = reverse('home')  # replace 'home' with your actual URL name
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_basic_math(self):
        self.assertEqual(1 + 1, 2)