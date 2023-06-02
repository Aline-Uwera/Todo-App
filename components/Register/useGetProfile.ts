import { GetProfileQuery, useGetProfileQuery } from "@/src/generated/graphql";
import { client } from "@/utils/graphql-client";

export const useGetProfile = (formData:any) => {    
    const { data} = useGetProfileQuery<GetProfileQuery, Error>(
      client,
      {
        userEmail: formData.email,
      }
    )
    return{data}
}





