#!/bin/bash

wmic process where "name='node.exe'" delete &
cd  ./VectorHRS-frontend/ 
exec npm run start