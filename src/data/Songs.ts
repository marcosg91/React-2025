export type Song = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  image: string;
};

export const songs: Song[] = [
  {
    id: '1',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    duration: '3:53',
    image: 'https://imgs.search.brave.com/RD1tBBdigK8lYqb6hFzmZfrcN-nGXszpT9O17Psyo_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTDJpXy1z/LVNJV2RrM1I2NjBJ/QTFWWmYzalRIUUd4/LUJOem5nRUZQMzBT/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG1ScC9jMk52WjNN/dVkyOXRMM0o2L1Vu/VlVaMEZ2VXpCaWVr/OWsvTlRaUk5rSmtS/V2R4UjNOai9UbmxW/ZEc0NWFXNTZlV0Zy/L016VnZkR2N2Y25N/NlptbDAvTDJjNmMy/MHZjVG8wTUM5by9P/ak13TUM5M09qTXdN/QzlqL2VrMDJUSGs1/YTJGWVRtcGkvTW1S/NkwweFhVbWhrUjBa/cC9XVmhPYkV4WGJI/UXZXVmRrL2JHTjVP/Vk5NVkdzMFQwUkov/TlM5UFJFbDBUVlJW/TWs5VS9ZekpQVkZr/eUwwNVRNREpPL1ZH/c3pURzF3ZDFwWFl5/NXEvY0dWbg',
  },
  {
    id: '2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20',
    image: 'https://imgs.search.brave.com/jiV3znorTqPIQVXuksi0OKerO1i2GR31Zggf566kHYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vOVNZWDRS/ZXlzR0JMekd1NERQ/OUZDWUxJZkJ0TVdx/TnVFalRBUGppZ1JC/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG1ScC9jMk52WjNN/dVkyOXRMMHBML2Ew/SkthWEo2UVZRd04y/UlYvVlhGQlprTmta/RFZTUlhOUC9jbEZ5/V2pNMlkwcHZiVEpC/L1QyNWlibk12Y25N/NlptbDAvTDJjNmMy/MHZjVG8wTUM5by9P/ak13TUM5M09qTXdN/QzlqL2VrMDJUSGs1/YTJGWVRtcGkvTW1S/NkwweFhVbWhrUjBa/cC9XVmhPYkV4WGJI/UXZXVmRrL2JHTjVP/Vk5NVkVVd1QxUlIv/TUM5T1JHTXpURlJG/TWs1Ni9hekJOVkdN/d0wwMVVUWFJPL2Vr/VjVUVk0xY1dOSFZt/NHUvYW5CbFp3',
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    duration: '3:24',
    image: 'https://imgs.search.brave.com/LGl60Obws3_ktah5GxHSFcdaiN-lAeTPYOLRkMg7Fj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRVFtUmVj/UXRkM2tJbmNsSS1t/dTExMjlQSFBCcHk2/THBhR2VNbWhWV0xS/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9iWFZ6YVdO/eWIyOXRMbU52L2JT/OXdjbTlrZFdOMEwy/bHQvWVdkbEwyeGhj/bWRsTDJSaC9iVFEz/TnpjeE5sOHdMbXB3/L1p3',
  },
  {
    id: '4',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    duration: '3:14',
    image: 'https://imgs.search.brave.com/pB0CkOdOxTFhVRgMHLq7AXLwLTJczbTRtYLbPq83Y-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20venByTXh3/dFR1T054WUh1ZWE3/ZE4tdExjZnVGcDBN/NDNUdlVHeFB2bFJZ/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlz/WVhOMC9abTB1Wm5K/bFpYUnNjeTVtL1lY/TjBiSGt1Ym1WMEwy/a3YvZFM4MU1EQjRO/VEF3THpJNS9PREkz/TlRsbU5qTTNZVEl4/L05tTTFOREEyWlRK/bE9HRm0vTVRKak1E/QTNMbXB3Wnc',
  },
  {
    id: '5',
    title: 'Peaches',
    artist: 'Justin Bieber',
    duration: '3:18',
    image: 'https://imgs.search.brave.com/FJa2_iVtgkHBdB0qaeTB_Sa2sQabELOeKY2Kgy8FnUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdFF0UTh3/ZERXQnRQSUZFNmd4/QlQzeXlSOUpwN2t0/SVpxSG54a0VaTzZk/NC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9aWFJ2Ym14/cGJtVXVZMjl0L0wz/TnBkR1Z6TDJSbFpt/RjEvYkhRdlptbHNa/WE12YzNSNS9iR1Z6/THpFeU9EQjROekl3/L0wzQjFZbXhwWXk5/cGJXRm4vWlhNdk1q/QXlNUzB3TXk5aS9h/V1ZpWlhKZmNHVmhZ/MmhsL2MxOHhNamd3/TG1wd1p6OW8vUFdN/Mk56TmpaREZqSm5k/cC9aSFJvUFRFd01q/UW1jWFZoL2JHbDBl/VDA0TUE',
  },
  {
    id: '6',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    duration: '2:54',
    image: 'https://imgs.search.brave.com/SdE_BJspsVs9Pb0qNWVgs2XZSti_S9-sRit6wp16UxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTHJhd3RR/UElEOHBmTk1yWjVG/c2VNQ0VWME42QVNN/bEJwd2ZjbWNDaTcy/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTls/ZUhSbC9jbTVoYkMx/d2NtVjJhV1YzL0xu/SmxaR1F1YVhRdlgy/NWsvV2toSFYxaFFh/akZSTm5NNS9PV1J4/Um5GMlptUmpMVzFu/L1EyVldPVUkxVjFw/UlJXNXovVUZvMFJT/NXFjR2NfZDJsay9k/R2c5TmpRd0ptTnli/M0E5L2MyMWhjblFt/WVhWMGJ6MTMvWldK/d0puTTlNekV5TXpS/aC9ZVGhoWmpZME9E/ZGlaR0ZrL09EbGxO/VFJtTjJKbU56Z3kv/TkRka1lXSTBZbVU1/WXc',
  },
  {
    id: '7',
    title: 'Stay',
    artist: 'The Kid LAROI, Justin Bieber',
    duration: '2:21',
    image: 'https://imgs.search.brave.com/GNOkdydxQvIKpnvBvKcq9HbyJLjJdOoaH5GcShWLZGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vNUFzUDRi/MzRZY0hxdW9zVFNy/YnNOaTFCalBuM0NT/UGtTamlrV2dTTFhY/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9ZbWxzYkdK/dllYSmtMbU52L2JT/OTNjQzFqYjI1MFpX/NTAvTDNWd2JHOWha/SE12TWpBeS9NUzh3/Tnk5VWFHVXRTMmxr/L0xVeEJVazlKTFVw/MWMzUnAvYmkxQ2FX/VmlaWEl0VTNSaC9l/UzFQWm1acFkybGhi/QzFXL2FXUmxieTF6/WTNKbFpXNXovYUc5/MExUSXdNakV0WW1s/cy9iR0p2WVhKa0xU/RTFORGd0L01UWXlO/akl3TVRnd09DNXEv/Y0djX2R6MDVORElt/YUQwMi9Nak1tWTNK/dmNEMHg',
  },
];

