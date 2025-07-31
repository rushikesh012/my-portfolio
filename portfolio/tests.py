from django.test import TestCase

# Create your tests here.
class DummyTest(TestCase):
    def test_basic_math(self):
        self.assertEqual(1 + 1, 2)