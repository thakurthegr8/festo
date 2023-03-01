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

const formFields = [
  { label: "Name", Input: Form.Text, name: "name" },
  { label: "Date", Input: Form.Date, name: "date" },
  { label: "Time", Input: Form.Time, name: "time" },
  // { label: "Group Reference", Input: Form.Text, name: "group_ref" },
];

const CreateEvent = () => {
  const fileUploadRef = useRef(null);
  const [imageBlob, setImageBlob] = useState(null);
  const groups = useGroups().map((item) => ({
    placeholder: item.name,
    value: item._id,
  }));
  const locations = useLocations().map((item) => ({
    placeholder: item.name,
    value: item._id,
  }));
  const categories = useCategories().map((item) => ({
    placeholder: item.name,
    value: item._id,
  }));

  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", imageBlob);
    form.append("upload_preset", process.env.NEXT_PUBLIC_STORAGE_PRESET);
    const uploadReq = await axios.post(
      process.env.NEXT_PUBLIC_STORAGE_URL,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const uploadRes = await uploadReq.data;
    return uploadRes;
  };

  const onSubmit = async (formData) => {
    if (imageBlob == null) return;
    try {
      const { url } = await uploadImage();
      formData = { ...formData, media_url: url };
      const req = await axios.post("/api/events/create", formData);
      const res = await req.data;
      if (res) alert("success");
      console.log(res);
    } catch (error) {
      alert("failed");
      console.log(error);
    }
  };

  return (
    <Col styles="gap-4">
      <Container styles="max-w-5xl">
        <Navbar />
        <Grid styles="grid-cols-1 md:grid-cols-2 gap-4">
          <Col>
            <Typography variant="text-title font-black">
              Create Event
            </Typography>
            <Form styles="space-y-4" onSubmit={onSubmit}>
              {formFields.map(({ Input, ...props }, index) => (
                <Input {...props} key={index} />
              ))}
              <Form.Select
                name="location"
                label="Location"
                options={locations}
              />
              <Form.Select
                name="type"
                label="Category"
                options={categories}
              />
              <Form.Select
                name="group_ref"
                label="Group Reference"
                options={groups}
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
                <Button>Submit</Button>
              </Row>
            </Form>
          </Col>
          <Col styles="bg-gray-300 justify-center items-center gap-4">
            {imageBlob && (
              <Image
                src={URL.createObjectURL(imageBlob)}
                width={200}
                height={200}
              />
            )}
            <Col styles="justify-center items-center bg-white rounded-full p-4 shadow-md">
              <Button
                variant="btn-icon"
                onClick={() => fileUploadRef.current.click()}
              >
                <PlusIcon className="w-6 h-6" />
              </Button>
            </Col>
            <Typography>Add Poster...</Typography>
          </Col>
        </Grid>
      </Container>
    </Col>
  );
};

export default CreateEvent;
