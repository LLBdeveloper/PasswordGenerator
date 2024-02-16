import { useState } from 'react';
import PasswordGenerator from './PasswordGenerator';

const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;

    let password = '';

    // Generar al menos una letra mayúscula
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));

    // Generar al menos un número
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));

    // Generar al menos un carácter especial
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    // Generar los caracteres restantes
    for (let i = 0; i < 7; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Mezclar los caracteres para obtener una contraseña aleatoria
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
};

const PasswordGeneratorContainer = () => {
    const [password, setPassword] = useState('');

    const handleClick = () => {
        setPassword(generatePassword());
    };

    return (
        <>
            <PasswordGenerator password={password} handleClick={handleClick} />
        </>
    );
};

export default PasswordGeneratorContainer;
