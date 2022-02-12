import { api } from "../api";

export const fetchApi: CallableFunction = async (
  query: string = ``,
  variables: object = {}
): Promise<any> => {
  const {
    data: { data },
  } = await api.graphql({ query, variables });
  return Object.values(data)[0];
};

type queries = {
  createUser: string;
  getOneBusiness: string;
  getUser : string
  createBusiness : string
  getCategories : string
  deleteImages : string
  getHome : string
  getSlugBusiness: string
  getSlugPosts: string
  getAllPost: string
  getMagazine : string
  deleteBusiness : string
};

export const queries: queries = {
  createUser: `mutation  ($uid : ID, $city: String, $country : String, $weddingDate : String, $phoneNumber : String, $role : [String]) {
    createUser(uid: $uid, city : $city, country : $country, weddingDate : $weddingDate, phoneNumber : $phoneNumber, role: $role){
          city
          country
          weddingDate
          phoneNumber
          role
        }
      }`,
  getOneBusiness: `query ($id: ID, $slug : String) {
    getOneBusiness(_id: $id, slug: $slug){
      _id
      slug
      tags
      contactName
      contactEmail
      businessName
      webPage
      landline
      mobilePhone
      whatsapp
      twitter
      facebook
      linkedin
      youtube
      instagram
      country
      city
      zip
      address
      description
      content
      subCategories{
        _id
      }
      questionsAndAnswers{
        questions{
          _id
          title
        }
        answers
      }
      coordinates{
        lat
        lng
      }
      categories{
        _id
      }
      subCategories{
        _id
      }
      imgMiniatura{
        _id
        i1024
        i800
        i640
        i320
      }
      imgLogo{
        _id
        i1024
        i800
        i640
        i320
      }
      status
      createdAt
      updatedAt
      characteristics{
        characteristic{
          _id
          title
          items{
            _id
            title
            clicked
          }
        }
        items{
          _id
          title
          clicked
        }
        
      }
      imgCarrusel {
        _id
        i1024
        i800
        i640
        i320
      }
    }
  }`,
  getUser : `query ($uid: ID) {
    getUser(uid:$uid){
      phoneNumber
      role
      typeRole
      city
      country
      weddingDate
      signUpProgress
      status
      createdAt
      updatedAt
    }
  }`,
  createBusiness : `mutation ($fase: String,
    $_id: ID,
    $userUid : ID,
    $contactName: String,
    $contactEmail : String,
    $mobilePhone : String,
    $businessName: String!,
    $country : String,
    $city: String,
    $webPage : String,
    $landline : String,
    $zip : String,
    $address : String,
    $description : String,
    $subCategories : [inputObjectID]
    $questionsAndAnswers : [inputQuestionsAndAnswers]
    $characteristics: [inputCharacteristicsCms]
    $coordinates : inputCoordinates
    ) {
        createBusiness(
          fase : $fase,
          id: $_id,
          inputBusiness:{
            userUid : $userUid,
            contactName: $contactName,
            contactEmail: $contactEmail,
            mobilePhone: $mobilePhone,
            businessName: $businessName,
            country: $country,
            city: $city,
            zip: $zip,
            address: $address,
            description: $description,
            subCategories: $subCategories,
            questionsAndAnswers : $questionsAndAnswers
            characteristics : $characteristics
            webPage: $webPage
            landline: $landline
            coordinates: $coordinates
          }){
          _id,
          fase,
          questionsAndAnswers{
            questions{
              _id
              title
            }
            answers
          }
          characteristics{
            characteristic{
              _id
              title
              items{
                _id
                title
              }
            }
            
          }
        }
      }`,
  getCategories : `query {
    getCategoryBusiness{
      total
      results{
        _id
        title
        imgMiniatura{
          i1024
          i800
          i640
          i320
        }
        imgBanner{
          i1024
          i800
          i640
          i320
        }
        slug
        description
        subCategories{
          _id
          title
          imgMiniatura{
          i1024
          i800
          i640
          i320
        }
          slug
          description
        }
      }
    }
  }`,
  deleteImages: `mutation  ($idImage :ID, $idBusiness:ID, $use : String) {
    deleteUpload(_id:$_id, businessID:$businessID, use:$use)
  }`,
  getHome : `query {
    getHome{
      business{
        _id
        slug
        description
        businessName
        imgMiniatura{
          i1024
          i800
          i640
          i320
        }
      }
      categoriesBusiness{
          title
          subCategories{
            _id
            title
            imgMiniatura{
              i1024
              i800
              i640
              i320
            }
          }
          slug
          imgMiniatura{
            i1024
            i800
            i640
            i320
          }
          icon{
            i1024
            i800
            i640
            i320
          }
      }
      post{
        _id
        title
        slug
        seoDescription
        content
        createdAt
        imgMiniatura{
          i1024
          i800
          i640
          i320
        }
      }
      categoriesPost{
        title
        imgMiniatura{
            i1024
            i800
            i640
            i320
        }
        subCategories{
          _id
          title
          slug
          imgMiniatura{
            i1024
            i800
            i640
            i320
          }
        }
        slug
      }
    }
  }`,
  getSlugBusiness : `query{
    getSlugBusiness
  }`,
  getSlugPosts : `query {
    getSlugPosts
  }`,
  getAllPost : `query ($criteria : searchCriteriaPost, $sort: sortCriteriaPost, $limit : Int, $skip : Int) {
    getAllPost(searchCriteria:$criteria, limit : $limit, skip: $skip){
      total
      results{
        _id
        title
        subTitle
        content
        permaLink
        slug
        seoDescription
        categories
        groupSubCategories
        subCategories
        tags
        imgCarrusel{
          _id
          mediumUrl
        }
        imgMiniatura{
          _id
          mediumUrl
        }
        authorUsername
        status
        createdAt
        updatedAt
      }
    }
  }`,
  getMagazine : `query {
    getMagazine{
      lastestPosts{
        _id
        content
        title
        slug
        categories
        updatedAt
        imgMiniatura{
          _id
          mediumUrl
        }
      }
      postsByCategory{
        _id
        title
        seoDescription
        slug
        imgMiniatura{
          _id
          mediumUrl
        }
      }
      postsMoreViews{
        _id
        title
        slug
        imgMiniatura{
          _id
          mediumUrl
        }
      }
      categoriesPost{
        categorie{
          title
          slug
        }
      }
    }
  }`,
  deleteBusiness : `mutation ($id : [ID]){
    deleteBusinesses(id: $id)
  }`
};

export const GraphQL = {
  // getPhotosBusinessByID: async (variables: any) => {
  //   const query = `query getBusiness($_id : ID){
  //     getBussines(id:$_id){
  //         _id,
  //         photos{
  //           _id
  //           mediumUrl
  //         }
  //       }
  //   }
  //   `;
  //   const {
  //     data: {
  //       data: { getBussines },
  //     },
  //   } = await api.graphql({ query, variables });
  //   return getBussines;
  // },




  uploadImage: async (file: any, id: string, use: string) => {
    const newFile = new FormData();
    const params = {
      query: `mutation ($file: Upload!, $businessID : String, $use : String) {
                singleUpload(file: $file, businessID:$businessID, use : $use){
                  _id
                  i1024
                  i800
                  i640
                  i320
                  createdAt
                }
              }
            `,
      variables: {
        file: null,
        businessID: id,
        use: use,
      },
    };

    let map = {
      0: ["variables.file"],
    };

    newFile.append("operations", JSON.stringify(params));
    newFile.append("map", JSON.stringify(map));
    newFile.append("0", file);

    const config = {
      onUploadProgress: (progressEvent: ProgressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
      },
    };

    const {
      data: {
        data: { singleUpload },
      },
    } = await api.graphql(newFile, config);
    return singleUpload;
  },


  
};
