export type Artist = {
  id: string;
  name: string;
  photo: string;
  listeners: number;
};

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Taylor Swift',
    photo: 'https://imgs.search.brave.com/YUumob4MSlSzPoYb1oiE-1dEyK6ehJY-Z7oDPp-qqVg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVm1zV0dO/UmJ3XzltUUVHejVu/eVg0ZUI3WlItZjVv/ejdCRGJramprTDZG/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/ZEdGMC9hV011ZDJs/cmFXRXVibTlqL2Iy/OXJhV1V1Ym1WMEwz/UmgvZVd4dmNuTjNh/V1owTDJsdC9ZV2Rs/Y3k5bUwyWXpMMVJo/L2VXeHZjbDlUZDJs/bWRGOUIvYkdKMWJW/OVFiM0owWVdSaC9M/bXB3Wnk5eVpYWnBj/Mmx2L2JpOXNZWFJs/YzNRdmMyTmgvYkdV/dGRHOHRkMmxrZEdn/dC9aRzkzYmk4eE9E/QV9ZMkk5L01qQXhP/REV4TWpjd05UQTEv/TXpJbWNHRjBhQzF3/Y21WbS9hWGc5WlhN.jpeg',
    listeners: 100,
  },
  {
    id: '2',
    name: 'The Weeknd',
    photo: 'https://imgs.search.brave.com/jiV3znorTqPIQVXuksi0OKerO1i2GR31Zggf566kHYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vOVNZWDRS/ZXlzR0JMekd1NERQ/OUZDWUxJZkJ0TVdx/TnVFalRBUGppZ1JC/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG1ScC9jMk52WjNN/dVkyOXRMMHBML2Ew/SkthWEo2UVZRd04y/UlYvVlhGQlprTmta/RFZTUlhOUC9jbEZ5/V2pNMlkwcHZiVEpC/L1QyNWlibk12Y25N/NlptbDAvTDJjNmMy/MHZjVG8wTUM5by9P/ak13TUM5M09qTXdN/QzlqL2VrMDJUSGs1/YTJGWVRtcGkvTW1S/NkwweFhVbWhrUjBa/cC9XVmhPYkV4WGJI/UXZXVmRrL2JHTjVP/Vk5NVkVVd1QxUlIv/TUM5T1JHTXpURlJG/TWs1Ni9hekJOVkdN/d0wwMVVUWFJPL2Vr/VjVUVk0xY1dOSFZt/NHUvYW5CbFp3',
    listeners: 95000000,
  },
  {
    id: '3',
    name: 'Dua Lipa',
    photo: 'https://imgs.search.brave.com/LGl60Obws3_ktah5GxHSFcdaiN-lAeTPYOLRkMg7Fj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRVFtUmVj/UXRkM2tJbmNsSS1t/dTExMjlQSFBCcHk2/THBhR2VNbWhWV0xS/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9iWFZ6YVdO/eWIyOXRMbU52L2JT/OXdjbTlrZFdOMEwy/bHQvWVdkbEwyeGhj/bWRsTDJSaC9iVFEz/TnpjeE5sOHdMbXB3/L1p3',
    listeners: 95000000,
  },
  {
    id: '4',
    name: 'Bad Bunny',
    photo: 'https://imgs.search.brave.com/pbPyOwQRleYYwEPumZFmVda8nSOnH1unklpMZLt8L_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vXzZnWDI5/MUk1SWdOXzNDZ0ZH/bVk4bjhoNW9oS2Ix/YnEzT3BXdjRadUNq/WS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVoYkd4/MWNtVXVZMjl0L0wz/Qm9iM1J2Y3k4Mk1U/UmwvTURjNFl6ZzRO/R00zWWpNeS9Nak0y/WXpRek16a3ZNVG94/L0wzZGZNekl3TEdO/ZmJHbHQvYVhRdllt/RmtKVEl3WW5WdS9i/bmtsTWpBeU1ERTRK/VEl3L1lXMWxjbWxq/WVc0bE1qQnQvZFhO/cFl5VXlNR0YzWVhK/ay9jeTVxY0dj',
    listeners: 10,
  },
  {
    id: '5',
    name: 'Billie Eilish',
    photo: 'https://imgs.search.brave.com/pB0CkOdOxTFhVRgMHLq7AXLwLTJczbTRtYLbPq83Y-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20venByTXh3/dFR1T054WUh1ZWE3/ZE4tdExjZnVGcDBN/NDNUdlVHeFB2bFJZ/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlz/WVhOMC9abTB1Wm5K/bFpYUnNjeTVtL1lY/TjBiSGt1Ym1WMEwy/a3YvZFM4MU1EQjRO/VEF3THpJNS9PREkz/TlRsbU5qTTNZVEl4/L05tTTFOREEyWlRK/bE9HRm0vTVRKak1E/QTNMbXB3Wnc',
    listeners: 95000000,
  },
];
