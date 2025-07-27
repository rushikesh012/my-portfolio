# My Portfolio Website

Single-page portfolio built with Django, HTML, CSS, and JavaScript.

## Features
- Dynamic admin panel to add or remove projects, skills, awards
- Sections: Home, Skills, Projects, Experience, Awards, Contact
- Responsive modern design

## Setup (for local development)

1. Clone the repo:
   ```
   git clone https://github.com/YourUsername/your-repo.git
   cd your-repo
   ```
2. Create and activate virtual environment:
   ```
   python -m venv env
   source env/bin/activate   # On Windows: env\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Add `.env` file:
   ```
   DJANGO_SECRET_KEY=your-key
   ```
5. Run migrations & start:
   ```
   python manage.py migrate
   python manage.py runserver
   ```

## License
MIT

