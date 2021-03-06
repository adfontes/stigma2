<div class="col-md-11 col-md-offset-1">
	<div class="page-header">
		<h2>Hosts List</h2>
	</div>

	<div>
		<!-- <div>
			<div class="col-lg-8">
				<div class="form-inline">
					<span>Group Name : </span>
					<input type="text" class="form-control" ng-model="hostgroup_name" placeholder="Write the name to create" />
				</div>
			</div>
			<div class="col-lg-4 text-right">
				<a class="btn btn-small btn-success" ng-show="!hasActive" ng-click="createHostgroup()">Add Group</a>
				<a class="btn btn-small btn-primary" ng-show="hasActive" ng-click="updateHostgroup()">Update Group</a>
				<a class="btn btn-small btn-danger" ng-show="hasActive" ng-click="deleteHostgroup()">Delete Group</a>
			</div>
			<div class="col-lg-12">
				<div style="white-space: nowrap; overflow-x: scroll; padding: 15px 5px;" data-toggle="buttons">
					<label class="btn btn-default" name="{{ hostgroup.object_uuid }}" ng-click="clickHostgroup(hostgroup)" ng-repeat="hostgroup in hostgroups" ng-show="hostgroups.length">
						{{ hostgroup.hostgroup_name }}
					</label>
					<span ng-show="!hostgroups.length">
						<strong>No hostgroups.</strong>
					</span>
				</div>
			</div>
		</div> -->
		<div class="form-inline text-right">
			<i class="fa fa-search"></i> <input type="text" class="form-control" ng-model="search.host_name" placeholder="Search">
		</div>
		
		<p><a ng-click="createHost()" class="btn btn-small">create new host</a></p>
		<table class="table table-striped table-condensed">
			<thead>
				<tr>
					<!-- <th style="width:20px;"> </th> -->
					<th style="width: 180px;">Host</th>
					<th>Description</th>
					<th style="width: 55px;"> </th>
					<th style="width: 75px;"> </th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="host in hosts | filter:search" ng-show="hosts.length">
					<!-- <td><input type="checkbox" name="{{host.object_uuid}}" value="{{host.object_uuid}}"></td> -->
					<td class="listTdOverflow" style="vertical-align: middle;">{{ host.host_name }}</td>
					<td class="listTdOverflow" style="vertical-align: middle;">{{ host.description }}</td>
					<td><a ng-click="editHost(host.id)" class="btn btn-small btn-primary">edit</a></td>
					<td><a ng-click="deleteHost(host.id)" class="btn btn-small btn-danger">delete</a></td>
				</tr>
				<tr ng-show="!hosts.length">
					<td colspan="4"><strong>No hosts.</strong></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>