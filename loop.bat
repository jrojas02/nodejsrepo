@echo off
:loop
powershell -command "(Invoke-WebRequest 'http://calculadora.apps-crc.testing/sumar?num1=10&num2=10').Content"
timeout /t 1 >nul
goto :loop