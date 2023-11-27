import * as React from "react";
<<<<<<< HEAD
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";
=======

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TripTitle } from "../trip/TripTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";
>>>>>>> main

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
<<<<<<< HEAD
        <TextInput label="listingCreatedBy" source="listingCreatedBy" />
=======
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="listingCreatedBy.id"
          reference="User"
          label="listingCreatedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
>>>>>>> main
        <div />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
<<<<<<< HEAD
        <TextInput label="placeType" source="placeType" />
=======
        <div />
        <TextInput label="placetype" source="placetype" />
        <NumberInput step={1} label="price" source="price" />
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="trips"
          reference="Trip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wishlists"
          reference="Wishlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WishlistTitle} />
        </ReferenceArrayInput>
>>>>>>> main
      </SimpleForm>
    </Edit>
  );
};
