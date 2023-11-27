import * as React from "react";
<<<<<<< HEAD
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";
=======
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
>>>>>>> main

export const ListingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"listings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
<<<<<<< HEAD
        <TextField label="ID" source="id" />
        <TextField label="listingCreatedBy" source="listingCreatedBy" />
        <TextField label="locationData" source="locationData" />
        <TextField label="locationType" source="locationType" />
        <TextField label="mapData" source="mapData" />
        <TextField label="placeAmeneties" source="placeAmeneties" />
        <TextField label="placeSpace" source="placeSpace" />
        <TextField label="placeType" source="placeType" />
=======
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="listingCreatedBy"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="locationData" source="locationData" />
        <TextField label="locationType" source="locationType" />
        <TextField label="mapData" source="mapData" />
        <TextField label="photos" source="photos" />
        <TextField label="placeAmeneites" source="placeAmeneites" />
        <TextField label="placeSpace" source="placeSpace" />
        <TextField label="placetype" source="placetype" />
        <TextField label="price" source="price" />
        <TextField label="title" source="title" />
>>>>>>> main
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
