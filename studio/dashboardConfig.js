export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606423a49d25e0c41f32cfe9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8xm88xkt',
                  apiId: 'e31c2d2d-fb3e-4d11-b524-cabb28e05620'
                },
                {
                  buildHookId: '606423a49d25e0c3bb32ce0f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w7569kes',
                  apiId: '6208bd81-2310-4f0c-a662-947381202a39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kjd9xhp/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w7569kes.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
