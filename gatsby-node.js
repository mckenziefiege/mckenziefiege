const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/components/project.js');
    resolve(
      graphql(`
          {
            allProjectsJson {
          		edges {
          			node {
                  slug
                }
              }
            }
          }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allProjectsJson.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: projectTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        return
      })
    );
  });
};
