#!/bin/bash

exec ./VectorHRS/manage.py runserver 0.0.0.0:8080 &
wmic process where "name='node.exe'" delete &
cd  ./VectorHRS-frontend/ 
exec npm run start