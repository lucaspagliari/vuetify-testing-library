import 'material-icons/iconfont/material-icons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
// https://vuetifyjs.com/en/labs/introduction/
import { VDataTable } from 'vuetify/labs/VDataTable'

const vuetify = createVuetify({
  components: {
    ...components,
    VDataTable,
  },
  directives,
  defaults: {
    VBtn: {
      rounded: 'lg',
      elevation: 0,
      height: '56px',
    },
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        dark: false,
      },
      darkTheme: {
        dark: true,
        colors: {
          primary: '#B9C3FF',
          background: '#001F28',
        },
      },
    },
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})

export { vuetify }
