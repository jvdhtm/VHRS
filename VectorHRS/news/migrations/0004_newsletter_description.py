# Generated by Django 4.0.5 on 2022-09-03 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_rename_relatedlink_newsrelatedlink'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsletter',
            name='description',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]