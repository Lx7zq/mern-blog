import { useEffect, useState } from "react";
import PostService from "../services/post.service";
import Swal from "sweetalert2";
import { useParams,useNavigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import { format } from "date-fns";

const baseURL = import.meta.env.VITE_PIC_URL;

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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
  
  const handleDelete = () =>{
    Swal.fire({
          title: "Delete post",
          text: "Do you want to delete this post?",
          icon: "question",
          showConfirmButton:true,
          confirmButtonText:"Yes",
          cancelButtonText:"No",
        }).then((result)=>{
          PostService.deleteById(id);
           Swal.fire({
          title: "Delte Post",
          text: "Delete successfully",
          icon: "success"
        }).then(()=>{
          navigate("/");
        })
        })
  }
 return (
  postDetail ? (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card bg-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-xl rounded-lg p-8">
        <div className="card-body">
          <h2 className="card-title">{postDetail.title}</h2>
          <div className="text-gray-600 mb-4">
          <time>
            {format(new Date(postDetail.createdAt),"dd MMMM yyyy HH:mm")}
          </time>
          <div className="author mb-2">
            <span className="text-blue-500">@{postDetail.author.username}
            </span>  
          </div> 
        {user.id === postDetail.author._id && (
  <div className="flex space-x-4 mt-6">
    {/* ปุ่ม Edit */}
    <button
      // onClick={() => handleEdit(postDetail._id)}  // ฟังก์ชันที่จัดการการแก้ไข
      className="btn btn-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
    >
      Edit
    </button>

    {/* ปุ่ม Delete */}
    <button
      onClick={() => handleDelete(postDetail._id)}  // ฟังก์ชันที่จัดการการลบ
      className="btn btn-danger text-white px-4 py-2 rounded-lg hover:bg-red-700"
    >
      Delete
    </button>
  </div>
)}

          <div className="btn">
            
          </div>
          <div className="content text-gray-700"
           dangerouslySetInnerHTML={{__html:postDetail.content}}>
          </div>
        <figure>
          <img
          src={`${baseURL}/${postDetail.cover}`}
          />
        </figure>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
);
};

export default PostDetail;
