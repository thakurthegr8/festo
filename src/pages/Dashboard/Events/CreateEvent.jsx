import React, { useEffect, useRef, useState } from "react";
import Grid from "@/src/components/Layout/Grid";
import Navbar from "@/src/sections/Navbar";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Typography from "@/src/components/General/Typography";
import Form from "@/src/components/DataEntry/Form";
import Button from "@/src/components/General/Button";
import Row from "@/src/components/Layout/Row";
import PlusIcon from "@heroicons/react/20/solid/PlusIcon";
import axios from "axios";
import { uploadFile } from "@/src/services/storage";
import Image from "next/image";
import useGroups from "@/src/hooks/useGroups";
import useLocations from "@/src/hooks/useLocations";
import useCategories from "@/src/hooks/useCategories";
import moment from "moment";
import { toast } from "react-toastify";
import { uploadImage, validateFormData } from "./utils";
import { createEventFormFields, createEventHeading } from "./data";



const CreateEvent = () => {
  const fileUploadRef = useRef(null);
  const [imageBlob, setImageBlob] = useState(null);
  const [loading, setLoading] = useState(false);
  const { groups } = useGroups();
  const { locations } = useLocations();
  const { categories } = useCategories();

  const onSubmit = async (formData) => {
    try {
      formData = validateFormData(formData);
      const { url } = await uploadImage(imageBlob);
      formData = { ...formData, media_url: url };
      setLoading(true);
      const req = await axios.post("/api/events/create", formData);
      const res = await req.data;

      if (res) {
        toast("success", { type: "success" });
      }
      console.log(res);
    } catch (error) {
      if (!error instanceof Error) return toast("Error", { type: "error" });
      toast(error.message, { type: "warning" });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Col styles="gap-4">
      <Container styles="max-w-5xl">
        <Navbar />
        <Grid styles="grid-cols-1 md:grid-cols-2 gap-4">
          <Col>
            <Typography variant="text-title font-black">
              {createEventHeading}
            </Typography>
            <Form styles="space-y-4" onSubmit={onSubmit}>
              {createEventFormFields.map(({ Input, ...props }, index) => (
                <Input {...props} key={index} />
              ))}
              <Form.Select
                name="location"
                label="Location"
                styles="capitalize"
                options={locations.map((item) => ({
                  placeholder: item.name,
                  value: item._id,
                }))}
              />
              <Form.Select
                name="type"
                label="Category"
                options={categories.map((item) => ({
                  placeholder: item.name,
                  value: item._id,
                }))}
                styles="capitalize"
              />
              <Form.Select
                name="group_ref"
                label="Group Reference"
                styles="capitalize"
                options={groups.map((item) => ({
                  placeholder: item.name,
                  value: item._id,
                }))}
              />
              <input
                type="file"
                className="hidden"
                name="event_poster"
                accept="image/*"
                ref={fileUploadRef}
                onChange={(e) => setImageBlob(e.target.files[0])}
              />
              <Row>
                <Button loading={loading}>Submit</Button>
              </Row>
            </Form>
          </Col>
          <Col styles="bg-gray-200 justify-center items-center gap-4 p-2 rounded-md">
            {imageBlob && (
              <Image
                src={URL.createObjectURL(imageBlob)}
                width={200}
                height={200}
              />
            )}
            <Col styles="justify-center items-center bg-white rounded-full shadow-md">
              <Button onClick={() => fileUploadRef.current.click()}>
                <Typography>
                  {imageBlob ? "Change Poster" : "Add Poster"}
                </Typography>
                <PlusIcon className="w-6 h-6" />
              </Button>
            </Col>
          </Col>
        </Grid>
      </Container>
    </Col>
  );
};

export default CreateEvent;
