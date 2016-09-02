(function(){
    describe('Comment Service', function() 
    {
        var CommentService, $httpBackend;

        beforeEach(angular.mock.module('app.service'));
        beforeEach(inject(function(_CommentService_, _$httpBackend_) 
        {
            CommentService = _CommentService_;
            $httpBackend = _$httpBackend_;
        }));
        
        it('#create', function () 
        {
            $httpBackend.expectPOST('../api/comments', 
            {
                name: 'Some details about a comment'
            }).respond(200);

            var succeeded;
            CommentService.create({name : "Some details about a comment"}).then(function () {succeeded = true;});
            $httpBackend.flush();
            expect(succeeded).toBeTruthy();
        });
        
        it('#update', function () 
        {
            $httpBackend.expectPUT('../api/comments/id', 
            {
                name: 'Some details about a comment'
            }).respond(200);

            var succeeded;
            CommentService.update("id", {name : "Some details about a comment"}).then(function () {succeeded = true;});
            $httpBackend.flush();
            expect(succeeded).toBeTruthy();
        });

        it('#delete', function () 
        {
            $httpBackend.expectDELETE('../api/comments/id').respond(200);
            var succeeded;
            CommentService.delete("id").then(function () {succeeded = true;});
            $httpBackend.flush();
            expect(succeeded).toBeTruthy();
        });

        it('#list', function () 
        {
            $httpBackend.expectGET('../api/comments').respond(200);
            var succeeded;
            CommentService.list().then(function () {succeeded = true;});
            $httpBackend.flush();
            expect(succeeded).toBeTruthy();
        });

        it('#get', function () 
        {
            $httpBackend.expectGET('../api/comments/id').respond(200);
            var succeeded;
            CommentService.get("id").then(function () {succeeded = true;});
            $httpBackend.flush();
            expect(succeeded).toBeTruthy();
        });
    });
})();