// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ScribbleStore {
    string public storedPrompt;

    function savePrompt(string memory _prompt) public {
        storedPrompt = _prompt;
    }

    function getPrompt() public view returns (string memory) {
        return storedPrompt;
    }
}
