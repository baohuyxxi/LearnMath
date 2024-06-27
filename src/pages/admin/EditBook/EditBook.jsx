import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FramePage from "~/components/FramePage/FramePage";
import BookAPI from "~/services/apis/BookAPI";
import { DataGrid } from "@mui/x-data-grid";
import { Modal, Button } from "@mui/material";
import ChapterModalContent from "~/components/ChapterModalContent/ChapterModalContent";
import "./EditBook.scss";
import ChapterAPI from "~/services/apis/ChapterAPI";
import { useSnackbar } from "notistack";
const EditBook = () => {
  const { classId, bookId } = useParams();
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchBookData = async () => {
      setLoading(true);
      try {
        const response = await BookAPI.getBook(bookId);
        setBookData(response.data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, [bookId]);

  const handleChapterEdit = async (id, field, value) => {
    const updatedChapters = bookData.lessons.map((lesson) =>
      lesson._id === id ? { ...lesson, [field]: value } : lesson
    );
    setBookData({ ...bookData, lessons: updatedChapters });

    try {
      await BookAPI.updateChapter(id, { [field]: value });
    } catch (error) {
      console.error("Error updating chapter:", error);
    }
  };

  const handleAddChapter = async () => {
    try {
      const newChapter = await BookAPI.addChapter(bookId, {
        name: "New Chapter",
        description: "Description",
        youtube: [], // Ensure the new chapter starts with an empty array
      });
      setBookData({
        ...bookData,
        lessons: [...bookData.lessons, newChapter.data],
      });
    } catch (error) {
      console.error("Error adding chapter:", error);
    }
  };

  const handleRemoveChapter = async (chapterId) => {
    try {
      await BookAPI.removeChapter(chapterId);
      setBookData({
        ...bookData,
        lessons: bookData.lessons.filter((lesson) => lesson._id !== chapterId),
      });
    } catch (error) {
      console.error("Error removing chapter:", error);
    }
  };

  const handleOpenModal = (chapter) => {
    setSelectedChapter(chapter);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedChapter(null);
  };

  const handleChapterDetailChange = (e) => {
    const { name, value } = e.target;
    setSelectedChapter({ ...selectedChapter, [name]: value });
  };

  const handleLessonDetailChange = (value, key, lessonId) => {
    const updateBookData = [...bookData];
    const chapterIndex = updateBookData.findIndex((chapter) =>
      chapter.lessons.some((lesson) => lesson._id === lessonId)
    );
    if (chapterIndex !== -1) {
      const lessonIndex = updateBookData[chapterIndex].lessons.findIndex(
        (lesson) => lesson._id === lessonId
      );

      if (lessonIndex !== -1) {
        updateBookData[chapterIndex].lessons[lessonIndex][key] = value;
        setBookData(updateBookData);
      } else {
        console.error(`Lesson with ID ${lessonId} not found in bookData.`);
      }
    } else {
      console.error(
        `Chapter with lesson ID ${lessonId} not found in bookData.`
      );
    }
  };

  const handleSaveChapterDetails = async () => {
    await ChapterAPI.editChapter(selectedChapter, selectedChapter._id)
      .then((res) => {
        enqueueSnackbar("Chương đã được cập nhật", { variant: "success" });
      })
      .catch((err) => {});
  };

  const chapterColumns = [
    { field: "name", headerName: "Tên chương", width: 200, editable: true },
    { field: "description", headerName: "Mô tả", width: 300, editable: true },
    {
      field: "actions",
      headerName: "Hành động",
      width: 150,
      renderCell: (params) => (
        <button
          onClick={() => handleOpenModal(params.row)}
          className="edit-book__button"
        >
          Chỉnh sửa
        </button>
      ),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bookData) {
    return <div>No book data</div>;
  }
  console.log(bookData);

  return (
    <FramePage>
      <div className="edit-book">
        <div className="edit-book__container">
          <div className="edit-book__chapters">
            <h2 className="edit-book__subtitle">Danh sách chương</h2>
            <DataGrid
              rows={bookData.map((chapter) => ({
                id: chapter._id,
                ...chapter,
              }))}
              columns={chapterColumns}
              autoHeight
              disableSelectionOnClick
              onCellEditCommit={(params) =>
                handleChapterEdit(params.id, params.field, params.value)
              }
            />
            <button onClick={handleAddChapter} className="edit-book__button">
              Thêm chương
            </button>
          </div>
        </div>
      </div>

      {selectedChapter && (
        <Modal open={openModal} onClose={handleCloseModal}>
          <ChapterModalContent
            selectedChapter={selectedChapter}
            handleChapterDetailChange={handleChapterDetailChange}
            handleLessonDetailChange={handleLessonDetailChange}
            handleSaveChapterDetails={handleSaveChapterDetails}
          />
        </Modal>
      )}
    </FramePage>
  );
};

export default EditBook;
