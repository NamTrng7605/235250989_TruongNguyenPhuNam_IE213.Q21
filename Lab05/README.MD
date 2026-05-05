# BÀI THỰC HÀNH 5: XÂY DỰNG FRONTEND VỚI REACTJS 

---

## Bài 1: Kết nối tới Backend

### 1.1. Cài đặt Axios
![Cài đặt Axios](img/1.1.png)

### 1.2 & 1.3. Tạo lớp dịch vụ MovieDataService
![Tạo lớp dịch vụ MovieDataService](img/1.2.png)

---

## Bài 2: Xây dựng Movies List Component

*Mục tiêu: Hoàn thiện màn hình Danh sách phim.*

**Lưu ý:** Cần cài đặt và sử dụng thư viện `react-bootstrap`.
![Sử dụng thư viện react-bootstrap](img/2.1.1.png)

### 2.1. Tạo các biến trạng thái
![Tạo các biến trạng thái](img/2.1.2.png)

### 2.2. Tạo phương thức `retrieveMovies()` và `retrieveRatings()` & dùng `useEffect()`
![Tạo phương thức retrieveMovies và retrieveRatings](img/2.2.png)

### 2.3 & 2.4. Tạo 2 search form và hiển thị các movie bằng `<Card>`
![Tạo form tìm kiếm 1](img/2.3.png)
![Tạo form tìm kiếm 2](img/2.3.1.png)

### 2.5. Hiện thực 2 phương thức `findByTitle()` và `findByRating()`
![Hiện thực phương thức tìm kiếm](img/2.5.png)

---

## Bài 3: Hiển thị thông tin trang Movie khi nhấn vào ‘View Reviews’

### 3.1. Thiết lập mã nguồn cho component Movie
![Thiết lập component Movie](img/3.1.png)

### 3.2. Xây dựng mã nguồn cho phương thức `getMovie()`
![Code phương thức getMovie](img/3.2.png)

### 3.3. Trang trí phần JSX trả về
![Trang trí giao diện JSX](img/3.3.png)

---

## Bài 4: Hiển thị danh sách review tương ứng cho từng phim dưới phần Plot

**Cài đặt thư viện `moment` để xử lý thời gian:**
![Cài đặt thư viện moment](img/4.1.png)

### 4.1. Viết đoạn mã nguồn JSX cho phép hiển thị danh sách review
![Mã nguồn JSX hiển thị review](img/4.3.png)

### 4.2. Điều chỉnh lại cách hiển thị giờ với `momentjs`
![Cập nhật hiển thị giờ](img/4.4.png)

---

## 🌟 Kết quả chạy thử

Dưới đây là kết quả giao diện hiển thị trên trình duyệt sau khi hoàn thiện:

![Kết quả thêm review thử](img/4.2.png)
![Kết quả chạy thử trang chính](img/4.5.png)
![Kết quả chạy thử trang review](img/4.6.png)