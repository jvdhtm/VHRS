# Generated by Django 4.0.5 on 2022-08-25 19:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('staff_api', '0006_remove_expertise_parentid_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Comments',
            new_name='StaffComment',
        ),
    ]
