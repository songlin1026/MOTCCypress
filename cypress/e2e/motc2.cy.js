describe('航港發展資料庫', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://data.motcmpb.gov.tw/');
  });

  it.only('到達首頁會顯示標題', () => {
    cy.get('body > main > section.bannerBox > h2').contains('航港發展資料庫');
    cy.url().should('include', 'data.motcmpb');
    cy.get(':nth-child(1) > .p_info > a').should(($div) => {
      const text = $div.text();

      // expect(text).to.match(/foo/);
    });

    should;
  });
  it('點選航港新聞館會顯示分類', () => {
    cy.get('body > header > nav > div > ul > li:nth-child(1) > h3 > a').click();
    cy.get('body > main > section.the_location > div').contains('企劃類');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(2)').click();
    cy.get('body > main > section.the_location > div').contains('航務類');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(3)').click();
    cy.get('body > main > section.the_location > div').contains('港務類');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(4)').click();
    cy.get('body > main > section.the_location > div').contains('船舶類');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(5)').click();
    cy.get('body > main > section.the_location > div').contains('船員類');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(6)').click();
    cy.get('body > main > section.the_location > div').contains('航安類');
  });

  it('點選海運新南向專區會顯示分類', () => {
    cy.get('body > header > nav > div > ul > li:nth-child(2) > h3 > a').click();
    cy.get('body > main > section.the_location > div').contains('海運新南向專區');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(2)').click();
    cy.get('body > main > section.the_location > div').contains('物流與貿易專區');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(3)').click();
    cy.get('body > main > section.the_location > div').contains('郵輪產業發展專區');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(4)').click();
    cy.get('body > main > section.the_location > div').contains('租稅協定');
  });

  it('點選國際組織館會顯示分類', () => {
    cy.get('body > header > nav > div > ul > li:nth-child(3) > h3 > a').click();
    cy.get('body > main > section.the_location > div').contains('WTO');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(2)').click();
    cy.get('body > main > section.the_location > div').contains('國際海事組織IMO專區');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(3)').click();
    cy.get('body > main > section.the_location > div').contains('船級社');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(4)').click();
    cy.get('body > main > section.the_location > div').contains('BIMCO');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(5)').click();
    cy.get('body > main > section.the_location > div').contains('ICS');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(6)').click();
    cy.get('body > main > section.the_location > div').contains('WSC');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(7)').click();
    cy.get('body > main > section.the_location > div').contains('附屬機構和計劃');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(8)').click();
    cy.get('body > main > section.the_location > div').contains('IFSMA');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(9)').click();
    cy.get('body > main > section.the_location > div').contains('ITF');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(10)').click();
    cy.get('body > main > section.the_location > div').contains('UN');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(11)').click();
    cy.get('body > main > section.the_location > div').contains('ILO');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(12)').click();
    cy.get('body > main > section.the_location > div').contains('APEC');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(13)').click();
    cy.get('body > main > section.the_location > div').contains('OECD');
  });

  it('點選數據統計館會顯示分類', () => {
    cy.get('body > header > nav > div > ul > li:nth-child(4) > h3 > a').click();
    cy.get('body > main > section.the_location > div').contains('數據統計館');
    cy.get('body > main > section.dataListBox > div > div > div:nth-child(1) > ul:nth-child(2) > li > a > h4').contains('臺灣地區各港海峽兩岸航線進港船舶載貨噸數按船種及港口分');
  });

  it('點選知識分享館會顯示分類', () => {
    cy.get('body > header > nav > div > ul > li:nth-child(5) > h3 > a').click();
    cy.get('body > main > section.the_location > div').contains('年度工作及教育訓練教材');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(2)').click();
    cy.get('body > main > section.the_location > div').contains('海運重要國家相關資訊');
  });

  it('點選航港法規館會顯示分類', () => {
    cy.get('body > header > nav > div > ul > li:nth-child(6) > h3 > a').click();
    cy.get('body > main > section.the_location > div').contains('司法判解');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(2)').click();
    cy.get('body > main > section.the_location > div').contains('行政函釋');
  });

  it('點選公開資料會顯示分類', () => {
    cy.get('body > header > nav > div > ul > li:nth-child(7) > h3 > a').click();
    cy.get('body > main > section.the_location > div').contains('貨物');
    cy.get('body > main > section.dataListBox > div > div > h4 > a:nth-child(2)').click();
    cy.get('body > main > section.the_location > div').contains('貨櫃');
  });
});
