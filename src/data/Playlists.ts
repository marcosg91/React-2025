export type Playlist = {
    id: string;
    title: string;
    cover: string;
    description: string;
  };
  
  export const playlists: Playlist[] = [
    {
      id: '1',
      title: 'Top Hits 2024',
      cover: 'https://imgs.search.brave.com/eEvHS14wX9oq346OJOisT3Vi5xvfSgAfZUWUkCRZc-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdTU2THk3/WF9TeFVNRVhXa3FI/dkNJcW5VS1pDS3RH/Zms2R2o4SmZub1lW/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzUwYVcx/bGIzVjBMbU52L2JT/OXBiV0ZuWlhNdk1U/QTIvTVRreE9ETTVM/emMxTUM4MS9Oakl2/YVcxaFoyVXVhbkJu',
      description: 'Las canciones más populares del año 2024.',
    },
    {
      id: '2',
      title: 'Relax & Chill',
      cover: 'https://imgs.search.brave.com/1wxmOfX1bpJQQvMUbkCqIc1utpfxECsUggMc47T7R2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vLW52SE82/c2lvQ1hOSmpibEJI/SXhudDIxa3hSQUNJ/MUNqR3g1SjBkUnhv/WS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/STQvTkRnMU5qZ3lO/aTl3YUc5MC9ieTlv/WVhCd2VTMTNiMjFo/L2JpMXpkSEpsZEdO/b2FXNW4vTFdsdUxX/SmxaQzFoWm5SbC9j/aTEzWVd0cGJtY3Rk/WEF0L2FHRndjSGt0/ZVc5MWJtY3QvWjJs/eWJDMW5jbVZsZEhN/dC9aMjl2WkMxa1lY/a3VhbkJuL1AzTTlO/akV5ZURZeE1pWjMv/UFRBbWF6MHlNQ1pq/UFUxTC9aRVl3VkRW/T1gyWlpNVmxIL09G/bFdRMmt4UkZWTFlV/dDMvYlU5ZlYwdFBl/UzFEVFhwcS9Wa1pC/U2pnOQ',
      description: 'Música para relajarte y desconectarte.',
    },
    {
      id: '3',
      title: 'Workout Pump',
      cover: 'https://imgs.search.brave.com/XY7RpM_4ejef-KlAZjtJonxNoCtoLf0irlbMbRRFQhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vZDA5QUNn/dTRaRlk0UlRRNkZW/QlRPX1hBZ0NMUFpi/c2NSYlp2T3l5YWFp/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5E/YzMvTkRrME1UWTRM/M0JvYjNSdi9MMkp2/WkhrdGNIVnRjQzEz/L2IzSnJiM1YwTG1w/d1p6OXovUFRZeE1u/ZzJNVEltZHowdy9K/bXM5TWpBbVl6MWZY/MDltL1EyMXJabnA2/VW5CdGRFWjYvVlZw/UU9YaDJWSE5ZTUc0/eS9aVWhxUkZSNFdq/Wm5NMVoxL2FWZGpQ/UQ',
      description: 'Energía para tus entrenamientos.',
    },
    {
      id: '4',
      title: 'Indie Vibes',
      cover: 'https://imgs.search.brave.com/ttneYA_SkElanW6bA0ZyGxV7gF3q4nJ3_vHwXHqzZj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vNTVXSVdu/VlZQUGNkX0lUWURp/WFMxZnkwSWx1SEtW/dXVydVpSZE1RTHll/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Wkc1dC9MbmRsYzNS/M2FXNW5MbU52L2JT/NWljaTluYkc5emMy/RnkvZVM5MWNHeHZZ/V1J6TDJKeS9Mekl3/TWpNdk1EVXZNekV4/L09UTTRNakV2WlhO/MGFXeHYvTFdocGNI/QnBaUzB4TG1wdy9a/dw',
      description: 'Lo mejor del indie alternativo.',
    },
    {
      id: '5',
      title: 'Old School Classics',
      cover: 'https://imgs.search.brave.com/3hpDf5fe70P2hhaoT_c0hG5WJuQLguePYftEAOULTXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vZWloeUtL/NEd2dkVUdWVOek9m/RTBLMkdZbEcxQzQ2/V3dRemZIYW8wa2xm/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlt/WVhOMC9iSGt0Y3pN/dVlXeHNiWFZ6L2FX/TXVZMjl0TDNKbGJH/VmgvYzJVdmJYSXdN/REExTXpJMi9PVEV3/TDJaeWIyNTBMelF3/L01DOU9PWFJVWkZs/aGEyMWsvYzFVeFds/VTJRM1JKTmsxUy9l/V2hOTFU5R1NUaDZS/elJzL0xYRldjRmhZ/UWpGSlBTNXEvY0dj',
      description: 'Clásicos inolvidables de todos los tiempos.',
    },
  ];
  