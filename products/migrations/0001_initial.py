# Generated by Django 4.1.1 on 2022-11-08 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="shop",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.TextField()),
                ("price", models.TextField()),
                ("stock", models.IntegerField()),
                ("image", models.TextField()),
            ],
        ),
    ]
