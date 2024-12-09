const emojiMap = {
    'A': '🥰', 'B': '😘', 'C': '😂', 'D': '🥹', 'E': '🥲', 'F': '🤣',
    'G': '😶‍🌫', 'H': '🫥', 'I': '😮‍💨', 'J': '🤤', 'K': '😴', 'L': '🥴',
    'M': '😻', 'N': '🫶🏼', 'Ñ': '💋', 'O': '👀', 'P': '🫀', 'Q': '🫂',
    'R': '😶', 'S': '🙂‍↔', 'T': '😳', 'U': '🥺', 'V': '🙂‍↕', 'W': '🤓',
    'X': '😋', 'Y': '😌', 'Z': '😗'
};

function translateToEmojis() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let output = '';
    
    for (let char of inputText) {
        if (emojiMap[char]) {
            output += emojiMap[char];
        } else {
            output += char;
        }
    }
    
    document.getElementById('outputText').value = output;
}


