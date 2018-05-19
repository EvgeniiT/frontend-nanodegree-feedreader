$(function() {
  describe('RSS Feeds', function() {
    /* Tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
     it('have defined URLs and they are not empty', function() {
       allFeeds.forEach(function(feed) {
         expect(feed.url).toBeDefined();
         expect(feed.url.length).not.toBe(0);
       });
     });

    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
     it('have defined names and they are not empty', function() {
       allFeeds.forEach(function(feed) {
         expect(feed.name).toBeDefined();
         expect(feed.name.length).not.toBe(0);
       });
     });
  });

  describe('The menu', function() {
    /* Test that ensures the menu element is
     * hidden by default.
     */
    it('element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
     /* Test that ensures the menu changes
      * visibility when the menu icon is clicked.
      */
    it('becomes visible when the menu icon is clicked', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
    });

    it('becomes invisible when the menu icon is clicked again', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function() {
    beforeEach(function(done) {
      // loadFeed(0, function() {
        loadFeed(0, done);
      // });
    });
    /* Test that ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    */
    it('ensures when the loadFeed function is called and completes its work,\
        there is at least a single .entry element within the .feed container'
      , function(done) {
          expect($('.feed .entry').length).toBeGreaterThan(0);
          done();
    });
  });

  describe('New Feed Selection', function() {
    let content = '';
    let prevContent = '';
    beforeEach(function(done) {
      loadFeed(0, function() {
        prevContent = $('.feed').html();
        loadFeed(1, function() {
          content = $('.feed').html();
          done();
        });
      });
    });
    /* Test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    it('ensures when a new feed is loaded\
        by the loadFeed function that the content actually changes', function(done) {
          expect(content).not.toBe(prevContent);
          done();
    });
  });
}());
