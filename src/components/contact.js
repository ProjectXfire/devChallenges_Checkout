import React from "react";
// Providers
import {
  Email,
  Call,
  Person,
  Home,
  LocationCity,
  MarkunreadMailbox,
  Public,
} from "@material-ui/icons";
// Components
import { Field, Group, Title, Button } from "../style";

export const Contact = ({ saveData, register, handleSubmit, errors }) => {
  return (
    <div>
      <form onSubmit={handleSubmit(saveData)}>
        <Title>Contact information</Title>
        <Group>
          <label htmlFor="email">E-mail</label>
          <Field className="input" error={errors.email ? true : false}>
            <Email color="disabled" />
            <input
              name="email"
              {...register("email", { required: true })}
              placeholder="Enter your mail..."
              type="text"
            />
          </Field>
        </Group>
        <Group>
          <label htmlFor="phone">Phone</label>
          <Field className="input" error={errors.phone ? true : false}>
            <Call color="disabled" />
            <input
              name="phone"
              {...register("phone", { required: true })}
              placeholder="Enter your phone..."
              type="text"
            />
          </Field>
        </Group>
        <Title>Shipping address</Title>
        <Group>
          <label htmlFor="fullname">Fullname</label>
          <Field className="input" error={errors.fullname ? true : false}>
            <Person color="disabled" />
            <input
              name="fullname"
              {...register("fullname", { required: true })}
              placeholder="Enter your fullname..."
              type="text"
            />
          </Field>
        </Group>
        <Group>
          <label htmlFor="address">Address</label>
          <Field className="input" error={errors.address ? true : false}>
            <Home color="disabled" />
            <input
              name="address"
              {...register("address", { required: true })}
              placeholder="Enter your address..."
              type="text"
            />
          </Field>
        </Group>
        <Group>
          <label htmlFor="city">City</label>
          <Field className="input" error={errors.city ? true : false}>
            <LocationCity color="disabled" />
            <input
              name="city"
              {...register("city", { required: true })}
              placeholder="Enter your city..."
              type="text"
            />
          </Field>
        </Group>
        <Group>
          <label htmlFor="city">Country</label>
          <Field className="input" error={errors.country ? true : false}>
            <Public color="disabled" />
            <select
              name="country"
              {...register("country", { required: true })}
              placeholder="Enter your Country..."
            >
              <option value="">Select country</option>
              <option value="france">France</option>
              <option value="spain">Spain</option>
              <option value="brazil">Brazil</option>
            </select>
          </Field>
        </Group>
        <Group>
          <label htmlFor="city">Postal code</label>
          <Field className="input" error={errors.postalcode ? true : false}>
            <MarkunreadMailbox color="disabled" />
            <input
              name="postalcode"
              {...register("postalcode", { required: true })}
              placeholder="Enter your Postal Code..."
              type="text"
            />
          </Field>
        </Group>
        <Button type="submit">Continue</Button>
      </form>
    </div>
  );
};
