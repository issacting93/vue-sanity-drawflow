export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '616a60a444705caa8ddef12b',
                  title: 'Sanity Studio',
                  name: 'vue-sanity-drawflow-studio',
                  apiId: 'b39b7e33-3666-42a2-85f8-1691bb562e71'
                },
                {
                  buildHookId: '616a60a44f06f99790356ba5',
                  title: 'Blog Website',
                  name: 'vue-sanity-drawflow',
                  apiId: '7daa513f-2b87-4738-a4a7-487941b416cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/issacting93/vue-sanity-drawflow',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://vue-sanity-drawflow.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
