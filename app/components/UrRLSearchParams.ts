import { parseLaunchParams } from '@tma.js/sdk';



const LaunchParams=()=>{
    return parseLaunchParams(
        new URLSearchParams([
          ['tgWebAppVersion', '6.7'],
          ['tgWebAppPlatform', 'tdekstop'],
          ['tgWebAppBotInline', '1'],
          ['tgWebAppData', new URLSearchParams([
            ['query_id', 'AAHdF6IQAAAAAN0XohAOqR8k'],
            ['user', JSON.stringify({
              id: 279058397,
              first_name: 'Million',
              last_name: 'Mulugeta',
              username: 'Milla021',
              language_code: 'ru',
              is_premium: true,
              allows_write_to_pm: true,
            })],
            ['auth_date', '1691441944'],
            ['hash', 'abc'],
          ]).toString()],
          ['tgWebAppThemeParams', JSON.stringify({
            bg_color: '#17212b',
            button_color: '#5288c1',
            button_text_color: '#ffffff',
            hint_color: '#708499',
            link_color: '#6ab3f3',
            secondary_bg_color: '#232e3c',
            text_color: '#f5f5f5',
          })],
        ]),
      );
}

export default LaunchParams;