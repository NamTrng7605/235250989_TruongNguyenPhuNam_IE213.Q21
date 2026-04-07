# Báo cáo Thực hành Lab 3
<br>

## Bài 1: Thiết lập định tuyến cho các thao tác với review
<br>

**1.1** Định tuyến này sẽ có đường dẫn cuối cùng là `/review`
<br>

**1.2** Thiết lập định tuyến thêm review (`POST`)
<br>

**1.3** Thiết lập định tuyến sửa review (`PUT`)
<br>

**1.4** Thiết lập định tuyến xoá review (`DELETE`)
<br>

![alt text](img/1.1.png)
<br><br>

---
<br>

## Bài 2: Thiết lập Controller cho review
<br>

**2.1** Tạo tệp tin `reviews.controller.js`
<br>

![alt text](img/2.1.png)
<br>

**2.2** Import `ReviewsDAO`
<br>

![alt text](img/2.2.png)
<br>

**2.3** Tạo phương thức `apiPostReview()`
<br>

![alt text](img/2.3.png)
<br>

**2.4** Tạo phương thức `apiUpdateReview()`
<br>

![alt text](img/2.4.png)
<br>

**2.5** Tạo phương thức `apiDeleteReview()`
<br>

![alt text](img/2.5.png)
<br><br>

---
<br>

## Bài 3: Thiết lập DAO cho reviews
<br>

**3.1** Khởi tạo `reviewsDAO.js`
<br>
![alt text](img/3.1.png)
<br>

**3.2** Tạo phương thức `injectDB()`
<br>

![alt text](img/3.2.png)
<br>

**3.3** Tạo phương thức `addReview()`
<br>

![alt text](img/3.3.png)
<br>

**3.4** Tạo phương thức `updateReview()`
<br>

![alt text](img/3.4.png)
<br>

**3.5** Tạo phương thức `deleteReview()`
<br>

![alt text](img/3.5.png)
<br>

**3.6** Thử nghiệm các API bằng Postman
<br>

![alt text](img/3.6.1.png)
<br>

![alt text](img/3.6.2.png)
<br>

![alt text](img/3.6.3.png)
<br><br>

---
<br>

## Bài 4: Hoàn thành back-end cho ứng dụng minh họa
<br>

**4.1** Thêm 2 định tuyến mới
<br>

![alt text](img/4.1.png)
<br>

**4.2** Cập nhật Controller cho Movie
<br>

![alt text](img/4.2.png)
<br>

**4.3** Cập nhật DAO cho Movie
<br>

![alt text](img/4.3.png)
<br>

**4.4** Thử nghiệm các API vừa tạo
<br>

![alt text](img/4.4.1.png)
<br>

![alt text](img/4.4.2.png)
<br>