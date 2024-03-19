# Audio
HTML audio elements provide developers with the means to embed audio content directly within web pages, offering users a seamless and immersive auditory experience. 

## Syntax of HTML Audio Elements
HTML audio elements are represented by the `<audio>` tag, which encapsulates audio content and provides controls for playback and interaction. The basic syntax of an HTML audio element consists of the opening `<audio>` tag, the source (`<source>`) elements specifying the audio file's location and format, and the closing `</audio>` tag.

```
<audio controls>
    <source src="audio.mp3" type="audio/mpeg" controls autoplay>
</audio>
```

## Attributes of HTML Audio Elements
HTML audio elements support various attributes that govern their behavior and presentation:

- `src`: Specifies the URL of the audio file to be played.
- `controls`: Enables the default audio controls, allowing users to play, pause, adjust volume, and seek within the audio track.
- `autoplay`: Automatically starts playback of the audio when the page loads.
- `loop`: Causes the audio to repeat continuously once playback reaches the end.
- `preload`: Specifies whether the audio should be preloaded when the page loads. Values include "none," "metadata," and "auto."

## Available audio format
Note: this is just the audio format you can use. this will not show in the exam :D.
- MP3 (MPEG Audio Layer III)
- AAC (Advanced Audio Coding)
- OGG (Ogg Vorbis)
- WAV (Waveform Audio File Format)
- FLAC (Free Lossless Audio Codec)
- WebM (Web Media)
