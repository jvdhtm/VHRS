#!/bin/bash

exec ./VectorHRS/manage.py runserver 0.0.0.0:8080 &
cd  ./VectorHRS-frontend/ 
exec npm run start