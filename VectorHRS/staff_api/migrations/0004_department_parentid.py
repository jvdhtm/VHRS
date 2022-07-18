# Generated by Django 4.0.5 on 2022-07-18 10:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('staff_api', '0003_department_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='department',
            name='parentId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='staff_api.department'),
        ),
    ]
