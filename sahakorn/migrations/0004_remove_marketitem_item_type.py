# Generated by Django 5.1.3 on 2024-11-27 12:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("sahakorn", "0003_rename_payed_loans_paid_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="marketitem",
            name="item_type",
        ),
    ]
