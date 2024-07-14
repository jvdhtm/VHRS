# Import necessary modules
import os
import django
import time
from django.db import connections
from django.db.utils import OperationalError

# Set the Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'VectorHRS.settings')
django.setup()

# Function to wait for database to be ready
def wait_for_db(retries=20, delay=5):
    for _ in range(retries):
        try:
            # Attempt to connect to the database
            with connections['default'].cursor() as cursor:
                cursor.execute('SELECT 1')
            print('Database connection established.')
            return
        except OperationalError:
            print(f'Database connection failed. Retrying in {delay} seconds...')
            time.sleep(delay)
    raise OperationalError('Exceeded maximum retries. Unable to establish database connection.')

# Define function to create superuser
def create_superuser():
    from django.contrib.auth import get_user_model
    User = get_user_model()
    if not User.objects.filter(username='root@local.com').exists():
        User.objects.create_superuser('root@local.com', 'root@local.com', 'admin')
        print('Superuser created successfully.')
    else:
        print('Superuser already exists.')

# Call the functions
if __name__ == '__main__':
    wait_for_db()
    create_superuser()
