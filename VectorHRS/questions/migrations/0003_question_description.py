# Generated by Django 4.0.5 on 2022-09-03 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0002_rename_questions_question'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='description',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]