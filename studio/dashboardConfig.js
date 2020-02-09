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
                  buildHookId: '5e40618b7b5bc0fbe8706129',
                  title: 'Sanity Studio',
                  name: 'grupo-Corbus-studio',
                  apiId: '4f9717b8-3fe8-4e38-97b7-aa5a4ff680fb'
                },
                {
                  buildHookId: '5e40618bfa0fa1ac600c0ebf',
                  title: 'Landing pages Website',
                  name: 'grupo-Corbus',
                  apiId: '13f2f049-ef02-4fe1-b9b0-5b3381c7297b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dnavamosler/grupo-Corbus',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://grupo-Corbus.netlify.com', category: 'apps'}
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
