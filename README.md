# R2-D2's Morse Code Translator 🤖


A fun, interactive Morse code translator with a Star Wars theme, featuring R2-D2 as your guide. This project includes both text-to-Morse and Morse-to-text translation capabilities, complete with sound playback and a comprehensive testing suite.

## Features ✨

- **Dual Translation**:
  - Encode text to Morse code
  - Decode Morse code to text
- **Audio Playback** 🔊 - Hear your Morse code messages
- **Star Wars Theme** 🌌 - Complete with R2-D2 ASCII art and starfield background
- **Dark/Light Mode** 🌓 - Toggle between themes
- **Comprehensive Testing** 🧪 - Built-in unit tests for all functionality
- **Morse Code Chart** 📊 - Quick reference guide
- **Keyboard Shortcuts** ⌨️ - For power users

## How to Use 🚀

1. **Encoding Text to Morse**:
   - Enter your message in the "Encode Message to Morse Code" section
   - Click "Encode to Morse" or press Ctrl+Enter
   - Optionally play the Morse code as sound

2. **Decoding Morse to Text**:
   - Enter Morse code (using dots and dashes) in the "Decode Morse Code to Text" section
   - Click "Decode from Morse" or press Ctrl+Enter
   - Optionally play the Morse code as sound

3. **Testing**:
   - Run comprehensive tests from the "Automated Testing Lab" section
   - Test encoding, decoding, or all functionality

## Keyboard Shortcuts ⌨️

- **Ctrl+Enter**: Translate the currently focused field
- **Ctrl+T**: Run all tests
- **Ctrl+D**: Toggle between dark/light theme

## Technical Details ⚙️

- **Object-Oriented Architecture**:
  - `MorseCodeData`: Singleton for Morse code mappings
  - `MorseEncoder`: Handles text-to-Morse conversion
  - `MorseDecoder`: Handles Morse-to-text conversion
  - `SoundManager`: Audio playback functionality
  - `UIManager`: Handles all UI interactions
  - Comprehensive testing framework with `TestRunner`, `TestSuite`, and `TestCase` classes

- **Technologies Used**:
  - Vanilla JavaScript (ES6+)
  - HTML5
  - CSS3
  - Web Audio API

## Development Setup 💻

1. Clone the repository: git clone https://github.com/Sharleen10/morse_code_r2d2.git
2. Open `morse_index.html` in your browser
3. Start translating!

🔗 Live Demo:  https://sharleen10.github.io/morse_code_r2d2/

## Example Messages 📝

Try these in the translator:

- **Love Note**: "I like you" → `.. / .-.. .. -.- . / -.-- --- ..-`
- **Spoiler Alert**: "Darth Vader is Luke's father" → `-.. .- .-. - .... / ...- .- -.. . .-. / .. ... / .-.. ..- -.- . .----. ... / ..-. .- - .... . .-.`
- **Emergency**: `.. / .- -- / .-. ..- -. -. .. -. --. / --- ..- - / --- ..-. / -.-. --- ..-. ..-. . .` → "I AM RUNNING OUT OF COFFEE"

## Console Commands (for Developers) 🛠️

Access these via browser console:

```javascript
R2D2.encode("text")    // Encode text to Morse
R2D2.decode("morse")   // Decode Morse to text
R2D2.runTests()        // Run all unit tests
R2D2.getStats()        // Get system statistics
R2D2.addTest()         // Add custom test case
```

## Version 📌

Current version: 2.0.0-OOP

## License 📄

This project is open source and available under the MIT License.

---

May the Force be with your Morse code translations! 🚀✨
