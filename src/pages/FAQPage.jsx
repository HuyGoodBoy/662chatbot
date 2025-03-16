const dataFAQs = [
  ["Nếu doanh nghiệp không có biến động, có thể nộp BHXH – BHYT – BHTN theo quý hoặc năm không?", "Căn cứ quyết định 1111/QĐ-BHXH của BHXH Việt Nam, trường hợp đơn vị không có biến động thì không cần khai báo, cơ quan BHXH sẽ căn cứ số liệu tháng trước để tính cho tháng sau. Hàng tháng căn cứ vào số tiền phải đóng BHXH, BHYT, BHTN doanh nghiệp nộp vào tài khoản chuyên thu của cơ quan BHXH chậm nhất vào ngày cuối cùng của tháng."],
  ["Tại sao chỉ phát hành thẻ BHYT trong vòng 6 tháng?", "Thời hạn sử dụng ghi trên thẻ BHYT có thể từ 3 tháng đến 5 năm tùy theo đối tượng tham gia BHYT. Riêng đối tượng doanh nghiệp sẽ được cấp thẻ giá trị 6 tháng hoặc 12 tháng tùy theo tình hình thực tế quản lý của doanh nghiệp, nếu doanh nghiệp có nhu cầu cấp thẻ 12 tháng thì có văn bản đề nghị gửi cơ quan BHXH nơi đang nộp BHXH, BHYT để được giải quyết."],
  ["Bảo hiểm Xã hội mới 2016 có bị vô quỹ như báo chí đưa tin không?", "Chính sách của Nhà nước là quản lý và bảo hộ quỹ bảo hiểm xã hội nên không có việc vô quỹ bảo hiểm xã hội như bạn nêu."],
  ["Nếu đóng BHXH đủ 20 năm nhưng chưa đủ tuổi nghỉ hưu thì khi nghỉ việc sau 1 năm có được nhận BHXH 1 lần không?", "Theo Điều 55 Luật BHXH số 71/2006/QH11, người lao động có đủ 20 năm đóng BHXH không thuộc đối tượng hưởng trợ cấp bảo hiểm xã hội một lần, trừ trường hợp ra nước ngoài để định cư."]
]
function FAQPage() {
  return (
    <div className="flex justify-center min-h-[85vh] h-auto bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="md:w-[50%]">
        <h1 className="text-3xl text-center font-bold p-5 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">Những câu hỏi thường gặp (FAQs)</h1>
        {
          dataFAQs.map((item, i) => <div key={i} className="mt-2 collapse collapse-plus shadow-md rounded-xl bg-white">
            <input type="checkbox" />
            <div className="collapse-title text-base font-medium">
              {item[0]}
            </div>
            <div className="collapse-content">
              <p>{item[1]}</p>
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
}
export default FAQPage;
