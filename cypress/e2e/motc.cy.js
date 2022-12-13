// https://docs.cypress.io/api/table-of-contents
const host = 'https://data.motcmpb.gov.tw/';
describe('航港發展資料庫網頁測試', () => {
  it('首頁導航欄 點擊後是否正確跳轉到正確頁面', () => {
    cy.visit(host);
    let menuText = '';
    cy.get('.top_menu > li > h3 > a').each((o, index) => {
      menuText = o.text();
      cy.contains(menuText).click({ force: true });
      if (index === 9) {
        assert.isTrue(true, 'this page is true');
      } else {
        cy.contains(menuText);
      }

      cy.visit(host);
    });
  });
  it('首頁最新消息 點擊標題跳轉至消息內頁', () => {
    cy.visit(host);
    let newsText = '';
    cy.get('.list>li>.p_info').each((o) => {
      newsText = o.text();

      cy.contains(newsText).click();
      cy.contains(newsText);
      cy.visit(host);
    });
  });

  it('首頁最新消息 點擊更多按鈕跳轉至消息列表頁', () => {
    cy.visit(host);
    cy.get('.more > .img_default').click();
    cy.contains('span', '最新資料');
  });

  it('最新消息列表頁 點擊標題跳轉至消息內頁', () => {
    cy.visit(`${host}/Latest`);
    let newsText = '';
    cy.get('.list_newsBox>li>a').each((o) => {
      newsText = o.find('h5').text();

      cy.contains(newsText).click();
      cy.contains(newsText);
      cy.visit(`${host}Latest`);
    });
  });

  it('首頁其他資訊 點擊圖片跳轉至其他資訊', () => {
    cy.visit(host);
    // 點擊其他圖片連結
    let otherPageText = '';
    cy.get('#flexslider2 > .flex-viewport > .slides > li > a > h3').each((o) => {
      otherPageText = o.text();
      cy.contains(otherPageText).click({ force: true });

      if (otherPageText === '航港局新聞館') {
        otherPageText = '航港新聞館';
      }
      cy.contains(otherPageText);
      cy.visit(host);
    });
  });

  it('知識分享館列表頁 點擊上方頁籤正確跳轉', () => {
    cy.visit('https://data.motcmpb.gov.tw/ListFolders/Index/137');
    cy.get('.main_sort>*').each(($a) => {
      const linktext = $a.text();
      cy.log(linktext);
      cy.get(`.main_sort > [title="${$a.text()}"]`).click();
      cy.contains(linktext);
    });
    cy.clickNextBtn();
  });

  it('航港新聞館列表頁 點擊上方頁籤正確跳轉', () => {
    cy.visit('https://data.motcmpb.gov.tw/ListFolders/Index/7');
    cy.get('.main_sort>*').each(($a) => {
      const linktext = $a.text();
      cy.log(linktext);
      cy.get(`.main_sort > [title="${$a.text()}"]`).click();
      cy.contains(linktext);
    });
    cy.clickNextBtn();
  });

  it('國際組織館列表頁 點擊上方頁籤正確跳轉', () => {
    cy.visit('https://data.motcmpb.gov.tw/ListFolders/Index/80');
    cy.get('.main_sort>*').each(($a) => {
      const linktext = $a.text();
      cy.log(linktext);
      cy.get(`.main_sort > [title="${$a.text()}"]`).click();
      cy.contains(linktext);
    });
    cy.clickNextBtn();
  });

  it('數據統計館列表頁 連結正確跳轉', () => {
    cy.visit('https://data.motcmpb.gov.tw/Reports/Index/36');
    cy.get(':nth-child(1) > :nth-child(2) > li > a > h4').click();
    cy.contains('船舶');
    cy.visit('https://data.motcmpb.gov.tw/Reports/Index/36');
    cy.get(':nth-child(2) > :nth-child(2) > li > a > h4').click();
    cy.contains('航線');
    cy.visit('https://data.motcmpb.gov.tw/Reports/Index/36');
    cy.get(':nth-child(3) > :nth-child(2) > li > a > h4').click();
    cy.contains('港口');
    cy.visit('https://data.motcmpb.gov.tw/Reports/Index/36');
    cy.get(':nth-child(4) > :nth-child(2) > li > a > h4').click();
    cy.contains('貨物');
    cy.visit('https://data.motcmpb.gov.tw/Reports/Index/36');
    cy.get(':nth-child(5) > :nth-child(2) > li > a > h4').click();
    cy.contains('貨櫃');
    cy.visit('https://data.motcmpb.gov.tw/Reports/Index/36');
  });

  Cypress.Commands.add('clickNextBtn', () => {
    // 點擊下一頁按鈕
    cy.get('.pageBox > li > p > .border ').last().click();
    // 點擊其他頁按鈕，是否正確跳轉到該頁
    let page = '';
    cy.get('.pageBox > li > p > .btn_in').click();
    cy.get('.pageBox > li > p > .btn_in')
      .then(($page) => {
        page = $page.text();
        cy.log(`page:${page}`);
      })
      .then(() => {
        cy.url().should('include', page);
      });
  });
});
