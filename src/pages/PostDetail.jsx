import { useEffect, useState } from "react";
import PostService from "../services/post.service";
import Swal from "sweetalert2";
import { useParams } from "react-router";

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await PostService.getPostById(id);
        if (response.status === 200) {
          setPostDetail(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Post Detail",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    fetchPostDetail();
  }, [id]);

  return <div></div>;
};

export default PostDetail;
