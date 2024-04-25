const products = [
  {
    name: 'Đắc Nhân Tâm',
    image: '/images/dacnhantam.png',
    description:
      'Đắc Nhân Tâm (How to Win Friends and Influence People) được mệnh danh là quyển sách hay nhất, nổi tiếng nhất, bán chạy nhất và nó có tầm ảnh hưởng đi xa nhất mọi thời đại, Đắc Nhân Tâm của soạn giả Dale Carnegie là 1 quyển sách hay nên đọc để bạn biết về nghệ thuật thu phục lòng người và làm tất cả mọi người phải yêu mến mình.',
    brand: 'Dale Carnegie',
    category: 'Book',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Dạy Con Làm Giàu',
    image: '/images/dekhongcotien.png',
    description:
      'Cuốn sách dạy con: Cách suy nghĩ về đồng tiền sẽ quyết định tương lai và sự giàu có của bạn. Có rất nhiều phương pháp để tôi và bạn cải thiện cuộc sống và thu nhập, nhưng với Dạy Con Làm Giàu của tác giả Robert Kiyosaki, bạn sẽ biết được chìa khóa nền tảng để trở nên giàu có hơn. Nếu như bạn muốn có thật nhiều tiền, tiêu pha vô tư thì bạn hãy đọc Dạy Con Làm Giàu vì cuốn sách kinh tế này giới thiệu vô vàn kiến thức bổ ích về thị trường marketing và tình hình tài chính sau này của bạn.',
    brand: 'Robert Kiyosaki',
    category: 'Book',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Đời thay đổi khi chúng ta thay đổi',
    image: '/images/doithaydoikhichungtathaydoi.png',
    description:
      '“Đời thay đổi khi chúng ta thay đổi” (Being A Happy Teenager) đem lại cho độc giả những tình huống vô cùng thực tế, thậm chí là các câu chuyện vừa “nhỏ nhặt” lại vừa “quan trọng” với cách ứng xử khôn ngoan, thú vị và hài hước… Đồng thời, độc giả như bắt gặp chính mình trong đó, có những cạnh tranh, thất bại, và có những tình huống giao tiếp vừa chân thật lại vừa bổ ích.',
    brand: 'Andrew Matthews',
    category: 'Book',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Mỗi lần vấp ngã là một lần Trưởng Thành',
    image: '/images/moilanvapnga.png',
    description:
      '“Mỗi lần vấp ngã là một lần Trưởng Thành” là cuốn sách hay về cuộc sống với nội dung theo kiểu kể chuyện và phân tích. Đây là cuốn sách giúp bạn trưởng thành hơn mà một lần vô tình ghé nhà sách, tôi bắt gặp tựa đề quá hay. Những câu chuyện trong đây như một dẫn chứng cụ thể và sống động trong cuộc sống thường ngày của mỗi chúng ta, trong đó có tôi và bạn đấy.',
    brand: 'Liêu Trí Phong',
    category: 'Book',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Nhà giả kim',
    image: '/images/nhagiakim.png',
    description:
      'Nhà giả kim (The Alchemist) của Paulo Coelho là một cuốn sách hay dành cho những người đã đánh mất đi ước mơ hoặc chưa bao giờ có nó. Nếu bạn đang cần tìm những cuốn sách nên đọc để thành công thì Nhà Giả Kim rất xứng đáng. Thành công như thế nào: thành công trong trong suy nghĩ và hành động.',
    brand: 'Paulo Coelho',
    category: 'Book',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Những Tấm Lòng Cao Cả',
    image: '/images/nhungtamlongcaoca.png',
    description:
      'Cuốn sách này có có tên tiếng Anh là “Heart” của nhà văn nổi tiếng người Ý – Edmondo De Amicis. Tôi biết tới quyển sách văn học này qua những câu chuyện được trích trong sách giáo khoa tiểu học – những bài học nhỏ nhưng cực kỳ ý nghĩa. Điều này thôi thúc tôi (lúc đã lớn) lại chọn tìm và đọc trọn vẹn nó thêm một lần nữa, cảm nhận rõ ràng những gì mà tác giả Edmondo De Amicis muốn gửi đến đọc giả.',
    brand: 'Edmondo De Amicis',
    category: 'Book',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Tội Ác Vô Hình',
    image: '/images/toiacvohinh.png',
    description:
      'Cuốn sách này có có tên tiếng Anh là “Heart” của nhà văn nổi tiếng người Ý – Edmondo De Amicis. Tôi biết tới quyển sách văn học này qua những câu chuyện được trích trong sách giáo khoa tiểu học – những bài học nhỏ nhưng cực kỳ ý nghĩa. Điều này thôi thúc tôi (lúc đã lớn) lại chọn tìm và đọc trọn vẹn nó thêm một lần nữa, cảm nhận rõ ràng những gì mà tác giả Edmondo De Amicis muốn gửi đến đọc giả.',
    brand: 'Edmondo De Amicis',
    category: 'Book',
    price: 20,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
