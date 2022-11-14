// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

// We first import some OpenZeppelin Contracts.
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

// We inherit the contract we imported. This means we'll have access
// to the inherited contract's methods.
contract MyEpicNFT is ERC721URIStorage {
    // Magic given to us by OpenZeppelin to help us keep track of tokenIds.
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // This is our SVG code. All we need to change is the word that's displayed. Everything else stays the same.
    // So, we make a baseSvg variable here that all our NFTs can use.
    string baseSvg =
        "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";

    string[] firstWords = [
        "Gamer",
        "Foodie",
        "Travler",
        "Hacker",
        "Couch Potato",
        "Hiker"
    ];

    string[] secondWords = [
        "Daisy",
        "Gardenia",
        "Lily",
        "Rose",
        "Hydrandea",
        "Peony"
    ];

    string[] thirdWords = ["Dog", "Cat", "Turtle", "Giraffe", "Fox", "Rabbit"];

    constructor() ERC721("SquareNFT", "SQUARE") {
        console.log("NFT contract");
    }

    // randomly generate words
    function pickRandomFirstWord(uint256 tokenId)
        public
        view
        returns (string memory)
    {
        // I seed the random generator. More on this in the lesson.
        uint256 rand = random(
            string(abi.encodePacked("FIRST_WORD", Strings.toString(tokenId)))
        );
        // Squash the # between 0 and the length of the array to avoid going out of bounds.
        rand = rand % firstWords.length;
        return firstWords[rand];
    }

    function pickRandomSecondWord(uint256 tokenId)
        public
        view
        returns (string memory)
    {
        uint256 rand = random(
            string(abi.encodePacked("SECOND_WORD", Strings.toString(tokenId)))
        );
        rand = rand % secondWords.length;
        return secondWords[rand];
    }

    function pickRandomThirdWord(uint256 tokenId)
        public
        view
        returns (string memory)
    {
        uint256 rand = random(
            string(abi.encodePacked("THIRD_WORD", Strings.toString(tokenId)))
        );
        rand = rand % thirdWords.length;
        return thirdWords[rand];
    }

    function random(string memory input) internal pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(input)));
    }

    // A function our user will hit to get their NFT.
    function makeAnEpicNFT() public {
        // Get the current tokenId, this starts at 0.
        uint256 newItemId = _tokenIds.current();

        // We go and randomly grab one word from each of the three arrays.
        string memory first = pickRandomFirstWord(newItemId);
        string memory second = pickRandomSecondWord(newItemId);
        string memory third = pickRandomThirdWord(newItemId);

        // I concatenate it all together, and then close the <text> and <svg> tags.
        string memory finalSvg = string(
            abi.encodePacked(baseSvg, first, second, third, "</text></svg>")
        );
        console.log("\n--------------------");
        console.log(finalSvg);
        console.log("--------------------\n");

        // Actually mint the NFT to the sender using msg.sender.
        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, "test");

        // Increment the counter for when the next NFT is minted.
        _tokenIds.increment();
        console.log(
            "An NFT w/ ID %s has been minted to %s",
            newItemId,
            msg.sender
        );
    }

    // Set the NFT's metadata
    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(_tokenId));
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    "eyJuYW1lIjoiWGlhbidzIE5GVCIsImRlc2NyaXB0aW9uIjoiQSBkZXYgdHJ5aW5nIHRvIG1ha2UgYW4gTkZULiIsImltYWdlIjoiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkMmxrZEdnOUlqRXdNREFpSUdobGFXZG9kRDBpT0RVMklpQjJhV1YzUW05NFBTSXdJREFnTnpVd0lEWTBNaUkrUEhCaGRHZ2daRDBpVFRneUxqZ2dNelF1TlVNMk9TNHpJRE0zTGpNZ05qRXVOeUEwTWk0NElEVTJJRFUwWXkwMExqTWdPQzQwTFRVdU15QXhOUzR5TFRRdU55QXpNeTR5TGpZZ01UZ3VNeTR5SURJd0xqTXROQzQzSURJM0xqZ3RNeTQwSURVdU1TMHhOQzR5SURFNUxqVXRNVFl1TnlBeU1pNHpMVE1nTXk0ekxUY3VPQ0F4TXk0eUxUa3VOQ0F4T1M0eUxURXVPU0EzTGpVdE1TNDVJREUyTGpVZ01DQXlNeTQ0SURFdU9DQTJMamdnT1M0eklERTRMamdnTVRBdU5TQXhOaTQyTGpRdExqZ2dNUzR6TFRVdU9TQXhMamt0TVRFdU5DQXhMall0TVRJdU9TQTFMalV0TXpJdU9DQTRMakl0TkRBdU9TQXpMamN0TVRFdU15QXhNQzR5TFRFMUxqY2dNamd0TVRrZ01URXVOQzB5TGpJZ01USXRNaTQ1SURFeExqVXRNVFV1TkMwdU1pMDFMalF0TVM0eExURXlMalF0TWkweE5TNDNMVEl1TlMwNUxqTXRNaTR6TFRFd0xqRWdNeTB4TVM0MElERXhMak10TWk0NUlERTVMamt0TVRBZ01qUXVPUzB5TUM0MmJESXVOeTAxTGpjZ015NDFJRE11TkdNM0xqRWdOaTQzSURFeElERTRMallnT1M0NUlESTVMamN0TGpnZ09DNHhMUzQ1SURndU5pMHlMallnTVRNdU5pMHhMallnTkM0NUxUSXVPU0EyTGpNdE5pNDJJRFl1TnkweUxqY3VNeTB5TGprdU55MHpMaklnTkM0NExTNDFJRFl1T1NBeExqSWdNVEV1TmlBMExqZ2dNVEl1T1NBeExqY3VOU0F6SUM0M0lETWdMalJ6TGpZdExqRWdNUzR6TGpWak1TNHpJREVnTVRJdU55QTBMalVnTVRNdU1pQTBJQzR5TFM0eUxqY3RNeTR5SURFdU1TMDJMamRzTGprdE5pNHpJREV4TGpVdExqVmpOaTR6TFM0eUlERXhMall0TGpZZ01URXVPQzB1T0M0NUxTNDRMVEl1TVMweE5DNDFMVFF1T1MweU15MDRMak10TWpRdU9DMHlOeTR4TFRVekxUTTVMamN0TlRrdU5DMDFMall0TWk0NUxUSXdMall0TXk0M0xUTXdMalF0TVM0MmVrMDFPQ0F5TlRaakxURXVNU0F4TGpFdE1pQXpMVElnTkM0emN5MHVOQ0F5TGpjdExqa2dNeTR5WXkwdU9TQXhMakV0TkM0MklERTFMalF0TlM0NElESXpMUzQwSURJdU55MHVPQ0F4TWk0eUxTNDRJREl4SURBZ01UUXVOaTR5SURFMkxqVWdNaTQwSURJeExqSWdOQzR4SURrdU1pQXlMak1nT0M0NElEUTBMallnT0M0NGFETTNiREV5TGpNdE15NHpZekV4TGprdE15NHlJREkwTGpRdE55NDNJRE00TGpZdE1UUXVNU0F6TGpndE1TNDNJRGN1TVMweUxqa2dOeTR6TFRJdU55NHpMak10TGpVZ015NHpMVEV1TmlBMkxqa3RNUzR5SURNdU5TMHlMak1nTnk0eUxUSXVOaUE0TGpNdExqSWdNUzB4TGpNZ05TNHpMVEl1TkNBNUxqUnpMVEl1TWlBNExqZ3RNaTQxSURFd0xqVmpMUzR6SURFdU5pMHhMallnT1M0ekxUTWdNVGR6TFRJdU55QXhOUzQyTFRNZ01UY3VOV010TGpJZ01TNDVMUzQ1SURZdU9TMHhMalVnTVRFdE1TNDVJREV6TGpjdE1pNHhJREUxTGpRdE1pNDNJREkwTGpkc0xTNDNJRGt1TXlBekxqUWdNUzQwWXpFdU9TNDRJRE11T1NBeExqVWdOQzQwSURFdU5pNDJMakVnTVM0MUxqWWdNaTR4SURFdU1YTXpMamtnTVM0eUlEY3VNaUF4TGpWak55NHhMamdnTlM0MklESXVOeUF4TWk0eExURTFMallnTWk0eExUVXVPQ0EyTGpndE1UZ3VOU0F4TUM0MkxUSTRMalFnTXk0M0xUa3VPQ0EyTGpndE1UZ3VNeUEzTFRFNUlDNHpMVEV1TlNBeExqUXROQzR6SURNdU1pMDRMalF1T0MweExqZ2dNaTAwTGprZ01pNDNMVFl1T1hNeExqY3RNeTQ0SURJdU15MDBJRFF1TmlBekxqVWdPQzQ1SURndU1tTTRMak1nT1M0eElETTNMaklnTXpZdU5DQTFNeTQ0SURVd0xqa2dPU0EzTGprZ01UQXVNaUE0TGpZZ01UUXVNU0E0TGpZZ05TNHlJREFnTVRNdU1TMHlMak1nTVRVdU5pMDBMallnTVM0NExURXVOaUF4TGpjdE1pMDBMak10TVRNdU15MDRMalV0TVRZdU1TMHlNQzR4TFRNM0xqY3RNak11TVMwME15NHhMVEV1TkMweUxqVXROQzQzTFRndU5pMDNMalF0TVRNdU5TMHhOQzQwTFRJMkxqRXRNekl1T0MwMU5TNDJMVFExTGprdE56TXVNMHd5TWprZ01qWTBhQzAwTnk0MVl5MHpOeTR6SURBdE5EY3VOUzB1TXkwME55NDJMVEV1TXkwdU1TMHhMamd0TGprdE5pMHhMakl0Tmk0ekxTNHhMUzR5TFRJdU15NHlMVFF1Tnk0NExUa3VPU0F5TGpVdE5qSXVNaTR6TFRZM0xqRXRNaTQ0TFM0MUxTNHpMVEV1Tnk0MExUSXVPU0F4TGpaNmJUVXdNUzQySURFME5DNDFZeTB4TGpRZ015MHpMamdnT0M0eExUVXVNeUF4TVM0eUxURXVOU0F6TGpJdE1pNDJJRFl1TVMweUxqVWdOaTQxTGpFdU5TMHVNaTQ0TFM0NExqZ3RMalVnTUMwdU9TNHpMUzQ0TGpjdU1TNDFMVEl1TkNBMUxqa3ROUzQxSURFeUxUTXVNU0EyTGpJdE5TNDNJREV4TGpVdE5TNDJJREV4TGpnZ01DQXVNeTB5TGpVZ05TNDFMVFV1TmlBeE1TNDFMVE1nTmkwMUxqWWdNVEV1TXkwMUxqY2dNVEV1TnkwdU1TNDVMVEV5TGpVZ01qY3RNVGN1TkNBek5pNDBMVEV1T0NBekxqWXRNeTR4SURZdU9TMHlMamNnTnk0ekxqTXVNeTR4TGpZdExqVXVOaTB1TnlBd0xURXVNaTQyTFRFdU1pQXhMaklnTUNBdU55MHhMamdnTkM0M0xUTXVPU0E1TFRJdU1pQTBMakl0TXk0M0lEY3VPUzB6TGpRZ09DNHlMalF1TXk0eExqWXRMalV1Tm5NdE1TNDBJREV0TVM0NElESXVNbU10TGpNZ01TNHlMVFV1TkNBeE1TNDVMVEV4TGpJZ01qTXVOeTAxTGpjZ01URXVPUzB4TUM0MUlESXlMakl0TVRBdU5TQXlNaTQ0SURBZ0xqY3RMalFnTVM0ekxTNDVJREV1TXkwdU5DQXdMUzQzTGpNdExqWXVOeTR4TGpVdE1TNDJJRFF1TkMwekxqY2dPQzQ0TFRNdU1TQTJMak10TkNBNUxqUXROQzR6SURFMExqaHNMUzQwSURZdU55QXlNQzQ0TFM0eUlESXdMamt0TGpNZ01pNDNMVFZqTVM0MExUSXVOeUF5TGpRdE5TNHpJREl1TWkwMUxqY3RMak10TGpRdExqRXRMamd1TlMwdU9DNDFJREFnTVM0ekxURWdNUzQzTFRJdU15NHpMVEV1TWlBMExqWXRNVEF1TXlBNUxqUXRNakF1TW5NNUxqWXRNVGt1T0NBeE1DNDJMVEl5SURZdE1USXVPQ0F4TVM0eExUSXpMalZqTlM0eUxURXdMamNnTVRBdU1pMHlNUzR6SURFeExqTXRNak11TlNBeExUSXVNaUEwTGpJdE9DNDJJRGN0TVRRdU15QXlMamd0TlM0MklEUXVOeTB4TUM0eUlEUXVNeTB4TUM0eWN5MHVNeTB1TkM0eUxTNDRZekV1TXkwdU9TQXhNaTR4TFRJekxqSWdNVEV1TnkweU5DNHpMUzR4TFM0MUxqSXRMamt1TnkwdU9YTXhMak10TVNBeExqY3RNaTR6WXk0MkxUSXVNU0EzTGprdE1UY3VOeUF4TkM0M0xUTXhMallnTVM0NExUTXVOaUF6TFRZdU55QXlMamt0Tmk0NUxTNHlMUzR6TGpFdExqZ3VOaTB4TGpFZ01TNDNMVEV1TVNBMExqSXRNVEFnTkM0eUxURTFMakYyTFRWb0xUUXhMamxzTFRJdU5TQTFMalY2VFRRMU5TQTBNall1TjJNdE5DNHlJREV1TkMweE55QTJMamd0TWpBdU5TQTRMall0TWk0eUlERXVNaTAwTGpRZ01pNHlMVFVnTWk0ekxURWdMakl0Tnk0eElESXVPUzB4T0M0eElEZ3RNaTQ0SURFdU15MDFMalFnTWk0MExUVXVOeUF5TGpSekxUTXVPU0F4TGpZdE9DQXpMalV0T0NBekxqVXRPQzQySURNdU5TMHhMakV1TlMweExqRWdNUzR4WXpBZ0xqVXRMalF1T0MwdU9TNDFMUzQwTFM0ekxURXVOeTR4TFRJdU55NDVjeTB5TGpVZ01TNDFMVE11TVNBeExqVmpMVEV1TXlBd0xUZ3VNU0F5TGprdE1UZ3VNeUEzTGpndE15QXhMalF0TlM0M0lESXVOaTAySURJdU55MHVOUzR5TFRFdU5pNDJMVGt1TXlBekxqZHNMVEl1TnlBeExqRXVNaUF5TkM0NUxqTWdNalVnTWpVdU5TQXhNUzR5WXpZeUlESTNMalFnT0RZdU1pQXpOeTQzSURnMkxqZ2dNemN1TVM0MExTNDBMamN0TVRJdU5pNDNMVEkzTGpJZ01DMHlOQzR6TFM0eExUSTJMall0TVM0NExUSTNMamd0TVMwdU55MDRMalF0TkMweE5pNDFMVGN1TXkwNExqRXRNeTQwTFRFM0xqRXROeTR4TFRFNUxqa3RPQzQwYkMwMUxqTXRNaTR6SURRdU15MHlMakZqTVRBdU1pMDFMaklnTVRJdU55MDJMak1nTVRJdU55MDFMamtnTUNBdU5pQXhOQzR5TFRVdU5TQXhOUzQ0TFRZdU55NDJMUzQySURFdU1pMHVPQ0F4TGpJdExqUWdNQ0F1TXlBeUxqSXRMalVnTlMweExqbHNOQzQ1TFRJdU5YWXRNVGN1TjJNd0xURTVMalF0TGpndE16WXVNeTB4TGpndE16WXVNaTB1TXlBd0xURXVNeTR6TFRJdU1TNDJlbTB4TlRjdU5pQXlMalZqTFM0M0lEUXVNUzB1TnlBek15NDFJREFnTkRRdU5Hd3VOaUE0TGpFZ01UZ3VPU0EzTGpoak1UQXVNeUEwTGpJZ01Ua3VOaUE0TGpNZ01qQXVOU0E1SURFdU5TQXhMakVnTVM0eElERXVOUzB6TGpjZ015NDRMVE1nTVM0MExUa3VOQ0EwTGpJdE1UUXVOQ0EyTGpJdE5DNDVJREl1TVMwNUxqUWdOQzB4TUNBMExqTXRMalV1TkMweExqSXVOeTB4TGpVdU55MHVNeTR4TFRJdU9TQXhMVFV1TnlBeWJDMDFMak1nTW5ZeU55NDNZekFnTVRrZ0xqTWdNamN1T0NBeExqRWdNamN1T0M0MUlEQWdNeTQxTFRFdU1TQTJMalV0TWk0MWN6VXVOaTB5TGpVZ05TNDRMVEl1TlNBMExqTXRNUzQ1SURrdU1pMDBMaklnT1M0MExUUXVNeUE1TGprdE5DNDBZekV1TVMwdU1pQXpNaTR6TFRFekxqY2dNelV1TWkweE5TNHpJREV0TGpVZ05TNDBMVEl1TkNBNUxqZ3ROQzR5Y3pndU1pMHpMallnT0M0MUxUTXVPU0F4TGpFdExqWWdNUzQ0TFM0NFl6SXVNaTB1TkNBeU15NDJMVEV3TGpNZ01qUXVOeTB4TVM0eklERXVNaTB4TGpJdU9DMDBPQzB1TkMwME9TNHlMUzQzTFM0M0xURXdPUzQxTFRRNExqY3RNVEV3TGpVdE5EZ3VOeTB1TWlBd0xTNDNJREV1TlMweElETXVNbnB0TFRJMk5pNHhJREV4TGpaakxUSXVNaUF4TFRVdU15QXlMakl0TnlBeUxqWXRNeTQyTGprdE1UVXVPUzQ1TFRJekxqWWdNQzA1TGpVdE1TNHlMVGt1TkMweExqSXRPUzQzSURJdU15MHVNaUF4TGpndU1pQTBMakV1T0NBMUxqTWdNUzR5SURJdU15QTFMak1nTWk0MklERTNMaklnTVM0eElEUXRMalVnTVRFdU55MHhMaklnTVRjdE1TNDFJREV3TGpRdExqVWdNakF1TWkwekxqWWdNakl1TWkwMkxqZ2dNUzQyTFRJdU5pMHVNaTB6TGpjdE5pNDVMVFF1TXkwMExqWXRMalV0Tmk0NUxTNHlMVEV3SURFdU0zcE5NVFV3SURRMk1HTXROQzR5SURRdU5TMHpMaklnTnk0eElEWXVNeUF4Tnk0eElEUXVOU0EwTGpjZ01URXVOeUF4TWk0MElERTFMamtnTVRjdU1TQTNMamdnT0M0MklERXlMalFnTVRFdU9DQXhOeTR5SURFeExqZ2dNaUF3SURJdU5pMHVOU0F5TGpZdE1pNHhJREF0TXk0ekxUTXVPUzA1TGpRdE55NHpMVEV4TGpRdE9DNDFMVFV1TVMweE5pNHhMVEV6TGpNdE1qTXVNaTB5TlM0ekxUTXVNeTAxTGpZdE5pNDJMVEV3TGpJdE55NHpMVEV3TGpJdExqZ2dNQzB5TGpjZ01TNDBMVFF1TWlBemVpSXZQand2YzNablBnPT0ifQ=="
                )
            );
    }
}
