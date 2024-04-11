import { gql } from "graphql-request";

export const getAllBlogs = gql`
  query Galleries {
    galleries {
      id
      title
      underRubrik
      time
      laes
      img {
        id
        url
        width
      }
    }
  }
`;
